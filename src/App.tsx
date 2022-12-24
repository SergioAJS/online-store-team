import React from 'react'
// import { Product } from './components/product'
// import { products } from './data/products'
// import { Modal } from './components/modal';
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../src/pages/main'
import { CartPage } from '../src/pages/cart'
import { Header } from './components/Header/Header'
import { Footer } from './components/footer/Footer'
import { ProductPage } from './pages/ProductPage'
import AppContext from './context'
import { IProduct } from './models'

export function App() {
  const [items, setItems] = React.useState<IProduct[]>([])
  const [itemsInCart, setItemsInCart] = React.useState<number>(
    localStorage.itemsInCart !== undefined
      ? JSON.parse(localStorage.itemsInCart)
      : 0
  )
  const [cartPrice, setCartPrice] = React.useState<number>(
    localStorage.cartPrice !== undefined
      ? JSON.parse(localStorage.cartPrice)
      : 0
  )
  const [cart, setCart] = React.useState<IProduct[]>(
    localStorage.cart !== undefined ? JSON.parse(localStorage.itemsInCart) : []
  )

  return (
    <div className="site-container">
      <div className="black"></div>
      <AppContext.Provider
        value={{
          items,
          itemsInCart,
          cartPrice,
          cart,
          setItems,
          setItemsInCart,
          setCartPrice,
          setCart,
        }}
      >
        <Header itemsInCart={itemsInCart} cartPrice={cartPrice} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </AppContext.Provider>
      <Footer />
    </div>
  )
}

export default App
