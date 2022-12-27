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
}

export interface IContext {
  items?: IProduct[]
  itemsInCart?: number
  cartPrice?: number
  cart?: IProduct[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItems?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItemsInCart?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCartPrice?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCart?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAddToCart?: any
}
