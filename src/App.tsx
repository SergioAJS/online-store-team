import React, { ChangeEvent, useState } from 'react'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import { MainPage } from '../src/pages/main'
import { CartPage } from '../src/pages/cart'
import { Header } from './components/Header/Header'
import { Footer } from './components/footer/Footer'
import { ProductPage } from './pages/ProductPage'
import AppContext from './context'
import { IProduct, IProductInCart } from './models'
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage'

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
  const [cart, setCart] = React.useState<IProductInCart[]>(
    localStorage.cart !== undefined ? JSON.parse(localStorage.cart) : []
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
          const newObj: IProductInCart = Object.assign(
            {},
            { ...obj },
            { inCart: 1 }
          )
          localStorage.setItem('cart', JSON.stringify([...prev, newObj]))
          console.log(
            [...prev, obj].map((x) => x.id),
            'after added new'
          )
          return [...prev, newObj]
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
      alert('Error while add to cart')
      console.error(error)
    }
  }

  const onRemoveFromCart = async (obj: IProductInCart) => {
    let findIndex = -1
    try {
      if (cart.length > 0) {
        findIndex = cart.findIndex(
          (item: IProduct): boolean => Number(item.id) === Number(obj.id)
        )
      }
      if (findIndex !== -1) {
        setCart((prev) => {
          localStorage.setItem(
            'cart',
            JSON.stringify([
              ...prev.slice(0, findIndex),
              ...prev.slice(findIndex + 1),
            ])
          )
          console.log(
            [...prev.slice(0, findIndex), ...prev.slice(findIndex + 1)].map(
              (x) => x.id
            ),
            'after deleted'
          )
          return [...prev.slice(0, findIndex), ...prev.slice(findIndex + 1)]
        })
        setItemsInCart((prev) => {
          const res: number = prev - obj.inCart
          localStorage.setItem('itemsInCart', JSON.stringify(res))
          return res
        })
        setCartPrice((prev) => {
          const res: number = prev - obj.inCart * obj.price
          localStorage.setItem('cartPrice', JSON.stringify(res))
          return res
        })
      }
    } catch (error) {
      alert('Error while remove from cart')
      console.error(error)
    }
  }

  const onAddOne = (obj: IProductInCart) => {
    const findItem = cart.find(
      (item: IProductInCart): boolean => Number(item.id) === Number(obj.id)
    )
    if (findItem && findItem.stock > findItem.inCart) {
      findItem.inCart += 1
      localStorage.setItem('cart', JSON.stringify([...cart]))

      setItemsInCart((prev) => {
        localStorage.setItem('itemsInCart', JSON.stringify(prev + 1))
        return prev + 1
      })

      setCartPrice((prev) => {
        localStorage.setItem('cartPrice', JSON.stringify(prev + obj.price))
        return prev + obj.price
      })
    }
  }

  const onRemoveOne = (obj: IProductInCart) => {
    const findItem = cart.find(
      (item: IProductInCart): boolean => Number(item.id) === Number(obj.id)
    )
    if (findItem && findItem.inCart > 0) {
      findItem.inCart -= 1
      localStorage.setItem('cart', JSON.stringify([...cart]))

      setItemsInCart((prev) => {
        localStorage.setItem('itemsInCart', JSON.stringify(prev - 1))
        return prev - 1
      })

      setCartPrice((prev) => {
        localStorage.setItem('cartPrice', JSON.stringify(prev - obj.price))
        return prev - obj.price
      })
    }
    if (findItem && findItem.inCart === 0) onRemoveFromCart(obj)
  }

  const [search, setSearch] = useSearchParams()

  const queryBrand = search.get('Brand') || ''
  const queryCategory = search.get('Category') || ''
  const queryProductSearch = search.get('Search') || ''
  const querySort = search.get('Sort') || ''

  const [brandSelect, setBrandSelect] = useState(queryBrand)
  const [categorySelect, setCategorySelect] = useState(queryCategory)
  const [productSearch, setProductSearch] = useState(queryProductSearch)
  const [sortSelect, setSortSelect] = useState(querySort)

  function onSelect(e: ChangeEvent<HTMLSelectElement>) {
    const select = e.target.value
    console.log(select)
    select
      ? search.set(`${e.target.ariaLabel}`, `${select}`)
      : search.delete(`${e.target.ariaLabel}`)
    setSearch(search)
    if (e.target.ariaLabel === 'Brand') {
      setBrandSelect(select)
    } else if (e.target.ariaLabel === 'Category') {
      setCategorySelect(select)
    } else if (e.target.ariaLabel === 'Sort') {
      setSortSelect(select)
    }
  }

  function onSearchProduct(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const searchProduct = e.target.value
    searchProduct
      ? search.set(`${e.target.ariaLabel}`, `${searchProduct}`)
      : search.delete(`${e.target.ariaLabel}`)
    setSearch(search)
    setProductSearch(searchProduct)
  }

  function onClearFilters() {
    setBrandSelect('')
    setCategorySelect('')
    setSortSelect('')
    setProductSearch('')
    setSearch([])
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
          onRemoveFromCart,
          onAddOne,
          onRemoveOne,
          brandSelect,
          categorySelect,
          onSelect,
          productSearch,
          onSearchProduct,
          sortSelect,
          onClearFilters,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppContext.Provider>
      <Footer />
    </div>
  )
}

export default App
