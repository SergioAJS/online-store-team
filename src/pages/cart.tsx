import React from 'react'
import { IProduct } from '../models'
import { Product } from '../components/Product/Product'

export function CartPage({ cart }: { cart: IProduct[] }) {
  const cartArray: IProduct[] =
    localStorage.cartArray !== undefined
      ? JSON.parse(localStorage.cartArray)
      : []

  let sectionTitle = 'Cart'
  if (cartArray.length === 0) sectionTitle = 'YOUR CART IS EMPTY'
  return (
    <main className="main">
      <h1 className="visually-hidden">Cart</h1>
      <section className="section">
        <div className="catalog__container container">
          <h2 className="catalog__title section-title">{sectionTitle}</h2>

          {cart.map((item) => (
            <Product product={item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  )
}
