import React from 'react'
import styles from './ToCartBtn.module.scss'
import AppContext from '../../context'
import { ProductProps } from '../Product/Product'
import { IProductInCart } from '../../models'

export function ToCartBtn({ product }: ProductProps) {
  const { cart, onAddToCart, onRemoveFromCart } = React.useContext(AppContext)
  const [innerText, setInnerText] = React.useState<string>('To Cart')

  React.useEffect(() => {
    const isInCart = (id: number) => {
      return (
        cart?.find(
          (item: IProductInCart): boolean => Number(item.id) === Number(id)
        ) !== undefined
      )
    }
    setInnerText(isInCart(product.id) ? 'Remove' : 'Add to Cart')
  }, [cart, cart?.length, product.id])

  return (
    <>
      <button
        className={styles.product__button}
        onClick={
          innerText === 'Add to Cart'
            ? () => onAddToCart?.(product)
            : () =>
                cart?.map((item) => {
                  if (product.id === item.id) onRemoveFromCart?.(item)
                })
        }
      >
        {innerText}
      </button>
    </>
  )
}
