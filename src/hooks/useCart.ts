import React from 'react'
import AppContext from '../context'
//import { IProduct } from '../models'

export const useCart = () => {
  const c = React.useContext(AppContext)
  console.log(c), 'useContext(AppContext)'
  //   const cartPrice = cart.reduce(
  //     (sum: number, obj: IProduct) => obj.price + sum,
  //     0
  //   )
  //   const itemsInCart = cart.length

  //  return { cart, setCart, cartPrice, itemsInCart }

  return { c }
}
