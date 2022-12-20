import { useProducts } from '../../hooks/products'
import { Loader } from '../Loader/Loader'
import { Product } from '../Product/Product'

export function Catalogue() {
  const { products, loading } = useProducts()
  return (
    <section className="catalogue">
      <div className="catalogue__container">
        {loading && <Loader />}
        {products.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
