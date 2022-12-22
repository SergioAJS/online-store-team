import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../models'
import axios, { AxiosError } from 'axios'

export function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<IProduct>()

  async function fetchProduct() {
    try {
      const response = await axios.get<IProduct>(
        `https://dummyjson.com/products/${id}`
      )
      setProduct(response.data)
    } catch (e: unknown) {
      const error = e as AxiosError
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data))
  // }, [id])
  return (
    <main className="main">
      {product && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt="product" />
        </div>
      )}
    </main>
  )
}
