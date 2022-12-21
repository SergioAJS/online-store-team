import { useProducts } from '../../hooks/products'
import { Loader } from '../Loader/Loader'
import { Product } from '../Product/Product'
import styles from './Catalogue.module.scss'

export function Catalogue() {
  const { products, loading } = useProducts()
  return (
    <section className={styles.catalogue}>
      <h2 className={styles.section_header}>Catalog</h2>
      <div className={styles.catalogue__container}>
        {loading && <Loader />}
        {products.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
