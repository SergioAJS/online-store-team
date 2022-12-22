import React from 'react'
import { IProduct } from '../models'
//import { createSearchParams } from 'react-router-dom'

export function CartPage() {
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

          {/* <Cart />) */}
        </div>
      </section>
    </main>
  )
}
