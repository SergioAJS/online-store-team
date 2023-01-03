import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { IProduct } from '../models'
import axios, { AxiosError } from 'axios'
import styles from './ProductPage.module.scss'
import AppContext from '../context'

export function ProductPage() {
  const { onAddToCart } = React.useContext(AppContext)
  const { id } = useParams()
  const [product, setProduct] = useState<IProduct>()
  const [image, setImage] = useState('')

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
    if (product) {
      onAddToCart?.(product)
    }
  }

  return (
    <main className="main">
      {product && product.id > 0 && product.id < 21 ? (
        <>
          <h1 className={styles.title}>{product.title}</h1>
          <div className={`${styles.main__container} container`}>
            <ul className={styles.bread__crumbs}>
              <li>
                <Link to={'/'}>Store</Link>
              </li>
              <li>{'>>'}</li>
              <li>{product.category}</li>
              <li>{'>>'}</li>
              <li>{product.brand}</li>
              <li>{'>>'}</li>
              <li>{product.title}</li>
            </ul>

            <section className={`${styles.product__container} container`}>
              <div className={styles.product}>
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
                      <span className={styles.price}>
                        ${product.price.toFixed(2)}
                      </span>
                    </li>
                    <li className={styles.characteristic}>
                      Description: <span>{product.description}</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.images}>
                  <div className={styles.small__images}>
                    {product.images?.map((image) => (
                      <img
                        src={image}
                        key={image}
                        onClick={() => {
                          setImage(image)
                        }}
                      ></img>
                    ))}
                  </div>
                  <div className={styles.big__image}>
                    <img
                      className={styles.product__image}
                      src={image ? image : product.thumbnail}
                      alt={product.title}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttons}>
                <button className={styles.product__button} onClick={AddToCart}>
                  To Cart
                </button>
                <button className={styles.product__button}>Buy Now</button>
              </div>
            </section>
          </div>
        </>
      ) : (
        <div className={`${styles.main__container} container`}>
          <div className={styles.not__found}>Product not Found</div>
        </div>
      )}
    </main>
  )
}
