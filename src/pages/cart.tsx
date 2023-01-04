import React, { ChangeEvent, useState } from 'react'
import { ProductInCart } from '../components/Product/ProductInCart'
import AppContext from '../context'
import { Modal } from '../components/Modal/Modal'

export function CartPage() {
  const {
    cart,
    onRemoveFromCart,
    onAddOne,
    onRemoveOne,
    itemsInCart,
    cartPrice,
  } = React.useContext(AppContext)

  let sectionTitle = 'Cart'
  let isCartNotEmpty = true
  if (cart === undefined || cart.length === 0) {
    isCartNotEmpty = false
    sectionTitle = 'YOUR CART IS EMPTY'
  }

  const onOpenModal = () => {
    const backstage: HTMLDivElement | null = document.querySelector('.black'),
      modal: HTMLDivElement | null = document.querySelector('.modal')
    modal?.classList.add('modal__open')
    backstage?.classList.add('black_active')
  }

  const promo1 = ['rs', 10]
  const promo2 = ['school', 15]
  const [isValidPromo1, setIsValidPromo1] = useState(false)
  const [isValidPromo2, setIsValidPromo2] = useState(false)
  const [isApplyPromo1, setIsApplyPromo1] = useState(false)
  const [isApplyPromo2, setIsApplyPromo2] = useState(false)

  const [priceWithPromo, setPriceWithPromo] = useState(0)

  function onEnterPromo(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const enteredPromo = e.target.value
    if (promo1[0] === enteredPromo) {
      setIsValidPromo1(true)
    } else {
      setIsValidPromo1(false)
    }
    if (promo2[0] === enteredPromo) {
      setIsValidPromo2(true)
    } else {
      setIsValidPromo2(false)
    }
  }

  function onApplyPromo1() {
    setIsApplyPromo1(true)
    if (isValidPromo1 && isApplyPromo2) {
      if (cartPrice) return setPriceWithPromo(cartPrice * 0.75)
    }
    if (isValidPromo1) {
      if (cartPrice) return setPriceWithPromo(cartPrice * 0.9)
    }
  }

  function onApplyPromo2() {
    setIsApplyPromo2(true)
    if (isApplyPromo1 && isValidPromo2) {
      if (cartPrice) return setPriceWithPromo(cartPrice * 0.75)
    }
    if (isValidPromo2) {
      if (cartPrice) return setPriceWithPromo(cartPrice * 0.85)
    }
  }

  function onDenyPromo1() {
    setIsApplyPromo1(false)
    if (cartPrice)
      if (isApplyPromo2) {
        return setPriceWithPromo(cartPrice * 0.85)
      } else {
        return cartPrice
      }
  }

  function onDenyPromo2() {
    setIsApplyPromo2(false)
    if (cartPrice)
      if (isApplyPromo1) {
        return setPriceWithPromo(cartPrice * 0.9)
      } else {
        return cartPrice
      }
  }

  return (
    <main className="main">
      <h1 className="visually-hidden">Cart</h1>
      <section className="section">
        <div className="cart container">
          <div className="cart__container">
            <h2 className="catalog__title section-title">{sectionTitle}</h2>
            <ol className="card__list">
              {cart &&
                cart.map((item) => (
                  <li className="card__item" key={item.id}>
                    <ProductInCart product={item} key={item.id} />
                    <button
                      className="card__buttons btn-gray"
                      onClick={() => onAddOne?.(item)}
                    >
                      +
                    </button>
                    <span className="card__quantity">{item.inCart}</span>
                    <button
                      className="card__buttons btn-gray"
                      onClick={() => onRemoveOne?.(item)}
                    >
                      -
                    </button>
                    <button
                      className="btn card__button delete-btn delete-btn-visible"
                      data-index={item.id}
                      title="Remove from cart"
                      onClick={() => onRemoveFromCart?.(item)}
                    >
                      X
                    </button>
                  </li>
                ))}
            </ol>
          </div>
          {isCartNotEmpty && (
            <div className="summary">
              <h2 className="section-title">Summary</h2>
              <p>Products: {itemsInCart}</p>
              {isApplyPromo1 && isApplyPromo2 ? (
                <>
                  <p className="with-promo">{`Total: $${
                    cartPrice && cartPrice.toFixed(2)
                  }`}</p>
                  <p>{`Total: $${priceWithPromo.toFixed(2)}`}</p>
                </>
              ) : isApplyPromo1 ? (
                <>
                  <p className="with-promo">{`Total: $${
                    cartPrice && cartPrice.toFixed(2)
                  }`}</p>
                  <p>{`Total: $${priceWithPromo.toFixed(2)}`}</p>
                </>
              ) : isApplyPromo2 ? (
                <>
                  <p className="with-promo">{`Total: $${
                    cartPrice && cartPrice.toFixed(2)
                  }`}</p>
                  <p>{`Total: $${priceWithPromo.toFixed(2)}`}</p>
                </>
              ) : (
                <p className="without-promo">{`Total: $${
                  cartPrice && cartPrice.toFixed(2)
                }`}</p>
              )}
              {isApplyPromo1 && isApplyPromo2 ? (
                <div className="applied-promos">
                  <h3>Applied promos</h3>
                  <p>rs promo: 10% discount</p>
                  <button
                    className="confirm-btn"
                    value="promo1"
                    onClick={onDenyPromo1}
                  >
                    Deny
                  </button>
                  <p>school promo: 15% discount</p>
                  <button
                    className="confirm-btn"
                    value="promo2"
                    onClick={onDenyPromo2}
                  >
                    Deny
                  </button>
                </div>
              ) : isApplyPromo2 ? (
                <div className="applied-promos">
                  <h3>Applied promos</h3>
                  <p>school promo: 15% discount</p>
                  <button
                    className="confirm-btn"
                    value="promo2"
                    onClick={onDenyPromo2}
                  >
                    Deny
                  </button>
                </div>
              ) : isApplyPromo1 ? (
                <div className="applied-promos">
                  <h3>Applied promos</h3>
                  <p>rs promo: 10% discount</p>
                  <button
                    className="confirm-btn"
                    value="promo1"
                    onClick={onDenyPromo1}
                  >
                    Deny
                  </button>
                </div>
              ) : (
                <></>
              )}
              <input
                className="promo-search"
                type="search"
                name="promo"
                id="promo"
                placeholder="Enter promo code"
                onChange={onEnterPromo}
              />
              <p>Promo for test: `rs`, `school`</p>
              {isValidPromo1 && (
                <div className="promo-enter">
                  <p>rs: 10% discount</p>
                  <button className="confirm-btn" onClick={onApplyPromo1}>
                    Apply promo code
                  </button>
                </div>
              )}
              {isValidPromo2 && (
                <div className="promo-enter">
                  <p>school: 15% discount</p>
                  <button className="confirm-btn" onClick={onApplyPromo2}>
                    Apply promo code
                  </button>
                </div>
              )}
              <button className="confirm-btn" onClick={() => onOpenModal()}>
                Confirm order
              </button>
            </div>
          )}
        </div>
      </section>
      <Modal />
    </main>
  )
}
