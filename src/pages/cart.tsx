import React from 'react'
//import { IProduct } from '../models'
import { ProductInCart } from '../components/Product/ProductInCart'
import AppContext from '../context'

export function CartPage() {
  const { cart } = React.useContext(AppContext)

  console.log(cart, 'cartArray', typeof cart)

  let sectionTitle = 'Cart'
  if (cart === undefined || cart.length === 0)
    sectionTitle = 'YOUR CART IS EMPTY'
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
                  <button className="card__buttons btn-gray">+</button>
                  <span className="card__quantity"></span>
                  <button className="card__buttons btn-gray">-</button>
                  <button
                    className="btn card__button delete-btn delete-btn-visible"
                    data-index={item.id}
                    title="Remove from cart"
                  >
                    X
                  </button>
                </li>
              ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
