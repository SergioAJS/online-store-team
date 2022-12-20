import { IProduct } from '../../models'

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
    </div>
  )
}
