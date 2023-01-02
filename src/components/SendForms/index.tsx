import React from 'react'
import { checkCVV, checkName, checkAddress } from '../../validate'

export function SendForms() {
  return (
    <>
      <form
        className="order__form form"
        id="form"
        action=""
        autoComplete="off"
        method="POST"
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
          pattern=".*([a-zA-Z]{3,}).*([a-zA-Z]{3,}).*"
          onInput={checkName}
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
          pattern="([a-zA-Z]{5,}).*([a-zA-Z]{5,}).*([a-zA-Z]{5,}).*"
          onInput={checkAddress}
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
          pattern="^\+[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="+- (---) --- -- --"
        />

        <label className="form__label form__label_phone" htmlFor="email">
          EMail<span className="error" aria-live="polite"></span>
        </label>
        <input
          className="form__input form__input_email"
          id="email"
          name="name"
          type="email"
          required
          pattern=".+@globex\.com"
          placeholder="name@gmail.com"
        />

        <fieldset className="form__set creditCardForm" id="card">
          <legend className="form__legend">Payment</legend>

          <div className="form-group" id="card-number-field">
            <label htmlFor="cardNumber">
              Card Number<span className="error" aria-live="polite"></span>
            </label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              required
              pattern="^[0-9]{14}$"
            />
          </div>
          <div className="form-group" id="expiration-date">
            <label htmlFor="date">
              Expiration (mm/yy)
              <span className="error" aria-live="polite"></span>
            </label>
            <input
              className="form__input form__input_phone"
              id="date"
              name="date"
              type="text"
              required
              pattern="^[0-1]{1}[0-9]{1}/[2]{1}[2-9]{2}"
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
              onInput={checkCVV}
            />
          </div>
          <div className="form-group credit-card" id="credit_cards">
            {/* <img src="assets/images/visa.jpg" id="visa" />
              <img src="assets/images/mastercard.jpg" id="mastercard" />
              <img src="assets/images/amex.jpg" id="amex" /> */}
          </div>
        </fieldset>

        <button
          className="contacts__button btn submit-btn btn-gray"
          type="submit"
          disabled
        >
          Submit
        </button>
      </form>
    </>
  )
}
