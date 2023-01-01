import { ChangeEvent, Dispatch } from 'react'

export interface IResponse {
  products: Array<IProduct>
  total: number
  skip: number
  limit: number
}

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images?: string[]
  inCart?: 0
}

export interface IProductInCart extends IProduct {
  inCart: 0
}

export interface IContext {
  items?: IProduct[]
  itemsInCart?: number
  cartPrice?: number
  cart?: IProductInCart[]
  setItems?: Dispatch<IProduct[]>
  setItemsInCart?: Dispatch<number>
  setCartPrice?: Dispatch<number>
  setCart?: Dispatch<IProductInCart[]>
  onAddToCart?: (arg0: IProduct) => void
  onRemoveFromCart?: (arg0: IProductInCart) => Promise<void>
  onAddOne?: (arg0: IProductInCart) => void
  onRemoveOne?: (arg0: IProductInCart) => void
  brandSelect?: string
  categorySelect?: string
  onSelect?: (aeg0: ChangeEvent<HTMLSelectElement>) => void
  productSearch?: string
  onSearchProduct?: (arg0: ChangeEvent<HTMLInputElement>) => void
}
