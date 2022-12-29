import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../models'
import axios, { AxiosError } from 'axios'
import styles from '../components/Product/Product.module.scss'
import AppContext from '../context'

export function ProductPage() {
  const { onAddToCart } = React.useContext(AppContext)
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

  const AddToCart = () => {
    onAddToCart(product)
  }

  return (
    <main className="main">
      {product && (
        <>
          <h1>{product.title}</h1>
          <div className="main__container container">
            <section className="product__container container">
              <div className={styles.description__container}>
                <ul className={styles.description}>
                  <li className={styles.characteristic}>
                    Category: <span>{product.category}</span>
                  </li>
                  <li className={styles.characteristic}>
                    Brand: <span>{product.brand}</span>
                  </li>
                  <li className={styles.characteristic}>
                    In Stock: <span>{product.stock}</span>
                  </li>
                  <li className={styles.characteristic}>
                    Rating: <span>{product.rating} / 5</span>
                  </li>
                  <li className={styles.characteristic}>
                    Discount: <span>{product.discountPercentage}%</span>
                  </li>
                  <li className={styles.characteristic}>
                    Your Price:{' '}
                    <span className={styles.price}>${product.price}</span>
                  </li>
                </ul>
                <img
                  className={styles.product__image}
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
              <div className={styles.buttons}>
                <button className={styles.product__button} onClick={AddToCart}>
                  To Cart
                </button>
              </div>
            </section>
          </div>
        </>
      )}
    </main>
  )
}
