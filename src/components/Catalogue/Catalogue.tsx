import { useProducts } from '../../hooks/products'
import { Product } from '../Product/Product'

export function Catalogue() {
  const { products } = useProducts()
  return (
    <section className="catalogue">
      <div className="catalogue__container">
        {products.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
