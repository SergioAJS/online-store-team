import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { IProduct, IResponse } from '../models'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [brands, setBrands] = useState<IProduct['brand'][]>([])
  const [categories, setCategories] = useState<IProduct['category'][]>([])
  const [minPrice, setMinPrice] = useState<IProduct['price']>(0)
  const [maxPrice, setMaxPrice] = useState<IProduct['price']>(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IResponse>(
        'https://dummyjson.com/products?limit=20'
      )
      setProducts(response.data.products)

      setBrands(response.data.products.map((item) => item.brand))

      setCategories(response.data.products.map((item) => item.category))

      const priceArr = response.data.products.map((item) => item.price)
      const minPrice = Math.min(...priceArr)
      setMinPrice(minPrice)
      const maxPrice = Math.max(...priceArr)
      setMaxPrice(maxPrice)

      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, error, loading, brands, categories, minPrice, maxPrice }
}
