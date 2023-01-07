import styles from './ProductInCart.module.scss'
import { ProductProps } from './Product'
import { Link } from 'react-router-dom'

export function ProductInCart({ product }: ProductProps) {
  return (
    <>
      <div className={styles.product}>
        <h3 className={styles.title}>{product.title}</h3>
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
              <span className={styles.price}>${product.price.toFixed(2)}</span>
            </li>
          </ul>
          <img
            className={styles.product__image}
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <div className={styles.buttons}>
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className={styles.product__button}
          >
            Details
          </Link>
        </div>
      </div>
    </>
  )
}
