import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { IProduct, IResponse } from '../models'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IResponse>(
        'https://dummyjson.com/products?limit=15'
      )
      setProducts(response.data.products)
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

  return { products, error, loading }
}
