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
// import { useProducts } from './hooks/products'

export function App() {
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

  const onAddToCart = (obj: IProduct): void => {
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
    }
  }

  const onRemoveFromCart = (obj: IProductInCart): void => {
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
  const queryView = search.get('View') || ''
  const queryMinPrice = search.get('minPrice') || '12'
  const queryMaxPrice = search.get('maxPrice') || '1749'
  const queryMinRate = search.get('minRate') || '4'
  const queryMaxRate = search.get('maxRate') || '4.83'

  const [brandSelect, setBrandSelect] = useState(queryBrand)
  const [categorySelect, setCategorySelect] = useState(queryCategory)
  const [productSearch, setProductSearch] = useState(queryProductSearch)
  const [sortSelect, setSortSelect] = useState(querySort)
  const [viewSelect, setViewSelect] = useState(queryView)
  const [minPriceCont, setMinPrice] = useState(queryMinPrice)
  const [maxPriceCont, setMaxPrice] = useState(queryMaxPrice)
  const [minRateCont, setMinRate] = useState(queryMinRate)
  const [maxRateCont, setMaxRate] = useState(queryMaxRate)

  const [modal, setModal] = useState<boolean>(false)

  function onMinPrice(e: ChangeEvent<HTMLInputElement>) {
    const min = Math.min(+e.target.value, 1749 - 1).toString()
    min
      ? search.set(`${e.target.ariaLabel}`, `${min}`)
      : search.delete(`${e.target.ariaLabel}`)
    setSearch(search)
    setMinPrice(min)
  }

  function onMaxPrice(e: ChangeEvent<HTMLInputElement>) {
    const max = Math.max(+e.target.value, 12 + 1).toString()
    max
      ? search.set(`${e.target.ariaLabel}`, `${max}`)
      : search.delete(`${e.target.ariaLabel}`)
    setSearch(search)
    setMaxPrice(max)
  }

  function onMinRate(e: ChangeEvent<HTMLInputElement>) {
    const min = Math.min(+e.target.value, 4.83 - 0.01).toString()
    min
      ? search.set(`${e.target.ariaLabel}`, `${min}`)
      : search.delete(`${e.target.ariaLabel}`)
    setSearch(search)
    setMinRate(min)
  }

  function onMaxRate(e: ChangeEvent<HTMLInputElement>) {
    const max = Math.max(+e.target.value, 4 + 0.01).toString()
    max
      ? search.set(`${e.target.ariaLabel}`, `${max}`)
      : search.delete(`${e.target.ariaLabel}`)
    setSearch(search)
    setMaxRate(max)
  }

  function onSelect(e: ChangeEvent<HTMLSelectElement>) {
    const select = e.target.value
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
    } else if (e.target.ariaLabel === 'View') {
      setViewSelect(select)
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
    setMinPrice('12')
    setMaxPrice('1749')
    setMinRate('4')
    setMaxRate('4.83')
  }

  return (
    <div className="site-container">
      <AppContext.Provider
        value={{
          itemsInCart,
          cartPrice,
          cart,
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
          viewSelect,
          modal,
          setModal,
          onMinPrice,
          onMaxPrice,
          minPriceCont,
          maxPriceCont,
          onMinRate,
          onMaxRate,
          minRateCont,
          maxRateCont,
        }}
      >
        <div
          className="black"
          style={
            modal
              ? { visibility: 'visible', zIndex: 15 }
              : { visibility: 'hidden', zIndex: -1 }
          }
        ></div>
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
