import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { IProduct, IResponse } from '../models'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      const response = await axios.get<IResponse>(
        'https://dummyjson.com/products?limit=15'
      )
      setProducts(response.data.products)
    } catch (e: unknown) {
      const error = e as AxiosError
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, error }
}
