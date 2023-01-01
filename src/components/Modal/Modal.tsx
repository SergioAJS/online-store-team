import React from 'react'
// import { ProductInCart } from '../components/Product/ProductInCart'
// import AppContext from '../context'

export function Modal() {
  const backstage = document.querySelector('.black'),
    modal = document.querySelector('.modal')

  const onCloseModal = () => {
    backstage?.classList.remove('black_active')
    modal?.classList.remove('modal__open')
  }
  return (
    <div className="modal">
      <div className="modal__content">
        <h3 className="card__title">Order</h3>
        {/* <form className="order__form form" id="form" action="" autoComplete="off" method="POST" noValidate>
                  <label className="form__label form__label_name" for="name">Name<span className="error"
                      aria-live="polite"></span></label>
                  <input className="form__input form__input_name" id="name" name="name" type="text" minLength="4"
                      required pattern="^[A-Za-z]*$" placeholder="John" />


                      <label className="form__label form__label_surname" for="surname">Surname<span className="error"
                          aria-live="polite"></span></label>
                      <input className="form__input form__input_surname" id="surname" name="surname" type="text"
                          minLength="5" required pattern="^[A-Za-z]*$" placeholder="Gald" />

                      <label className="form__label form__label_date" for="date">Delivery<span className="error"
                              aria-live="polite"></span></label>
                          <input className="form__input form__input_date" id="date" name="date" type="date" required />

                          <label className="form__label form__label_street" for="street">Street<span className="error"
                                  aria-live="polite"></span></label>
                              <input className="form__input form__input_street" id="street" name="street" type="text"
                                  minLength="5" required pattern="^[A-Za-z0-9]{1}[A-Za-z0-9\s]*[A-Za-z0-9]{1}$"
                                  placeholder="Amazing" />

                              <label className="form__label form__label_house" for="house">House<span className="error"
                                      aria-live="polite"></span></label>
                                  <input className="form__input form__input_house" id="house" name="house" type="number" min="0"
                                      required placeholder="3">

                                  <label className="form__label form__label_flat" for="flat">Flat number<span className="error"
                                          aria-live="polite"></span></label>
                                      <input className="form__input form__input_flat" id="flat" name="flat" type="text" min="0" required
                                          pattern='^\d+([/-]?\d+)*$' placeholder="10">

                                          <fieldset className="form__set" id="radio-set">
                                              <legend className="form__legend">Choose the payment type</legend>

                                              <label className="form__label form__label_pay" for="cash">
                                                  <input className="form__input form__input_pay" id="cash" name="payment" type="radio"
                                                      required />
                                                      Cash</label>

                                              <label className="form__label form__label_pay" for="card"><input
                                                  className="form__input form__input_pay" id="card" name="payment" type="radio" required
                                                  checked />
                                                  Card</label>
                                          </fieldset>

                                          <fieldset className="form__set" id="checkbox-set" noValidate>
                                              <legend className="form__legend" id="gifts">Choose 2 gifts<span className="error"
                                                  aria-live="polite"></span>
                                              </legend>

                                              <label className="form__label form__label_checkbox" for="pack"><input
                                                  className="form__input form__input_checkbox" id="pack" name="gifts" type="checkbox" />
                                                  Pack
                                                  as a gift</label>


                                              <label className="form__label form__label_checkbox" for="postcard"><input
                                                  className="form__input form__input_checkbox" id="postcard" name="gifts" type="checkbox" />
                                                  Add postcard</label>


                                              <label className="form__label form__label_checkbox" for="discount"><input
                                                  className="form__input form__input_checkbox" id="discount" name="gifts" type="checkbox" />
                                                  2% discount to the next
                                                  time</label>


                                              <label className="form__label form__label_checkbox" for="pen"><input
                                                  className="form__input form__input_checkbox" id="pen" name="gifts" type="checkbox" />
                                                  Branded pen</label>


                                              <label className="form__label form__label_checkbox" for="pencil"><input
                                                  className="form__input form__input_checkbox" id="pencil" name="gifts" type="checkbox" />
                                                  Branded pencil</label>
                                          </fieldset>

                                          <button className="contacts__button btn submit-btn btn-gray" type="submit"
                                              disabled>Complete</button>
                                      </form> */}
        <button
          className="btn card__button btn-gray cls-btn"
          onClick={() => onCloseModal()}
        >
          Close
        </button>
      </div>
    </div>
  )
}
