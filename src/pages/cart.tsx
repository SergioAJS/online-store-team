import React from 'react'
import { ProductInCart } from '../components/Product/ProductInCart'
import AppContext from '../context'
import { Modal } from '../components/Modal/Modal'

export function CartPage() {
  const { cart, onRemoveFromCart, onAddOne, onRemoveOne } =
    React.useContext(AppContext)

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

  return (
    <main className="main">
      <h1 className="visually-hidden">Cart</h1>
      <section className="section">
        <div className="catalog__container container">
          <h2 className="catalog__title section-title">{sectionTitle}</h2>
          <ol className="card__list">
            {cart &&
              cart.map((item) => (
                <li className="card__item" key={item.id}>
                  <ProductInCart product={item} key={item.id} />
                  <button
                    className="card__buttons btn-gray"
                    onClick={() => onAddOne(item)}
                  >
                    +
                  </button>
                  <span className="card__quantity">{item.inCart}</span>
                  <button
                    className="card__buttons btn-gray"
                    onClick={() => onRemoveOne(item)}
                  >
                    -
                  </button>
                  <button
                    className="btn card__button delete-btn delete-btn-visible"
                    data-index={item.id}
                    title="Remove from cart"
                    onClick={() => onRemoveFromCart(item)}
                  >
                    X
                  </button>
                </li>
              ))}
          </ol>
          {isCartNotEmpty && (
            <button
              className="btn catalog__button confirm-btn btn-gray"
              onClick={() => onOpenModal()}
            >
              Confirm order
            </button>
          )}
        </div>
      </section>
      <Modal />
    </main>
  )
}
