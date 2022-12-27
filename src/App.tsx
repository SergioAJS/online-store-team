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

  const onAddToCart = async (obj: IProduct) => {
    let findItem: IProduct | undefined = undefined
    try {
      if (cart.length > 0) {
        findItem = cart.find(
          (item: IProduct): boolean => Number(item.id) === Number(obj.id)
        )
      }
      if (!findItem) {
        setCart((prev) => {
          localStorage.setItem('cart', JSON.stringify([...prev, obj]))
          console.log(
            [...prev, obj].map((x) => x.id),
            'new'
          )
          return [...prev, obj]
        })
        setItemsInCart((prev) => {
          localStorage.setItem('itemsInCart', JSON.stringify(prev + 1))
          return prev + 1
        })
        setCartPrice((prev) => {
          localStorage.setItem('cartPrice', JSON.stringify(prev + obj.price))
          return prev + obj.price
        })
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину')
      console.error(error)
    }
  }

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
          onAddToCart,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </AppContext.Provider>
      <Footer />
    </div>
  )
}

export default App
