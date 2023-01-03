import React from 'react'
import {
  checkCVV,
  checkName,
  checkAddress,
  checkPhone,
  checkEmail,
  checkCardNumber,
  checkExpiration,
} from '../../validate'
import { Cards } from '../../models'

const validations: boolean[] = [false, false, false, false, false, false, false]

export function SendForms() {
  const [card, setCard] = React.useState<Cards>(Cards.Other)
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true)


  const checkValidity = (): void => {
    const confirm = document.querySelector('.submit-btn') as HTMLButtonElement
    if (validations.every((x) => x)) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }
  return (
    <>
      <form
        className="order__form form"
        id="form"
        action="/"
        autoComplete="off"
        method=""
        noValidate
      >
        <label className="form__label form__label_name" htmlFor="name">
          Name Surname<span className="error" aria-live="polite"></span>
        </label>
        <input
          className="form__input form__input_name"
          id="name"
          name="name"
          type="text"
          required
          pattern=".*([a-zA-Z]{3,}).\b([a-zA-Z]{3,}).*"
          onInput={() => {
            checkName(validations),
            checkValidity()
}}
          placeholder="John Gald"
        />

        <label className="form__label form__label_address" htmlFor="address">
          Address
          <span className="error" aria-live="polite"></span>
        </label>
        <input
          className="form__input form__input_name"
          id="address"
          name="address"
          type="text"
          required
          pattern="([a-zA-Z]{5,}).\b([a-zA-Z]{5,}).\b([a-zA-Z]{5,}).*"
          onInput={() => {
            checkAddress(validations)
            checkValidity()
}
          }
          placeholder="USA Springfield Evergreen"
        />

        <label className="form__label form__label_phone" htmlFor="phone">
          Phone number<span className="error" aria-live="polite"></span>
        </label>
        <input
          className="form__input form__input_phone"
          id="phone"
          name="name"
          type="tel"
          required
          pattern="\+[0-9]{8}\d*"
          onInput={() => {
            checkPhone(validations)
            checkValidity()
}}
          placeholder="+- (---) --- -- --"
        />

        <label className="form__label form__label_email" htmlFor="email">
          EMail<span className="error" aria-live="polite"></span>
        </label>
        <input
          className="form__input form__input_email"
          id="email"
          name="email"
          type="email"
          required
          pattern="[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}"
          onInput={() => {checkEmail(validations)
          checkValidity()
}}
          placeholder="name@gmail.com"
        />

        <fieldset className="form__set creditCardForm" id="card">
          <legend className="form__legend">Payment</legend>

          <div className="form-group" id="card-number-field">
            <label
              className="cardNumber form__label form__label_cardNumber"
              htmlFor="cardNumber"
            >
              Card Number<span className="error" aria-live="polite"></span>
            </label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              required
              pattern="^[3-5]{1}[0-9]{15}$"
              onInput={(): void => {
                checkCardNumber(validations)
                checkValidity()
                console.log(validations)
                const userCardNumber = document.getElementById(
                  'cardNumber'
                ) as HTMLInputElement
                if (userCardNumber.value.startsWith('3')) {
                  setCard(Cards.AmericanExpress)
                } else if (userCardNumber.value.startsWith('4')) {
                  setCard(Cards.Visa)
                } else if (userCardNumber.value.startsWith('5')) {
                  setCard(Cards.MasterCard)
                } else {
                  setCard(Cards.Other)
                }
              }}
            />
          </div>
          <div className="form-group" id="expiration-date">
            <label className="form__label form__label_date" htmlFor="date">
              Expiration (mm/yy)
              <span className="error" aria-live="polite"></span>
            </label>
            <input
              className="form__input form__input_phone"
              id="date"
              name="date"
              type="text"
              required
              pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"
              onInput={(): void => {
                const userExpiration = document.getElementById(
                  'date'
                ) as HTMLInputElement
                let temp: string = userExpiration.value
                if (temp.length === 2) {
                  temp += '/'
                  userExpiration.value = temp
                }
                checkExpiration(validations)
                checkValidity()
              }}
              placeholder="--/--"
            />
          </div>

          <div className="form-group CVV">
            <label className="form__label form__label_cvv" htmlFor="cvv">
              CVV<span className="error" aria-live="polite"></span>
            </label>
            <input
              type="text"
              minLength={3}
              maxLength={3}
              className="form-control"
              id="cvv"
              pattern="^[0-9]{3}$"
              required
              onInput={() => {
                checkCVV(validations)
                checkValidity()
}}
            />
          </div>
          <div className="form-group credit-card" id="credit_cards">
            <img src={card} />
          </div>
        </fieldset>

        <button
          className="contacts__button btn submit-btn btn-gray"
          onClick={(event) => {
            event.preventDefault()
            const head = document.getElementById(
              'form'
            ) as HTMLFormElement
            const message: HTMLDivElement = document.createElement('div');
            message.innerHTML = "The order was send"
            head.insertAdjacentHTML('beforebegin', '<div style="width:500px;height:40px;background-color:#ffcc00;font-size:36px">The order was send</div>')
            localStorage.clear()
            setTimeout(() => window.location.replace("/"), 3100)
          }}
          disabled={isDisabled}
        >
          Submit
        </button>
      </form>
    </>
  )
}
