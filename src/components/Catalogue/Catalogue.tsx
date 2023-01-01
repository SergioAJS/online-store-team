import { useProducts } from '../../hooks/products'
import { Loader } from '../Loader/Loader'
import { Product } from '../Product/Product'
import styles from './Catalogue.module.scss'
import { useCategoryFilter } from '../../hooks/categoryFilter'
import { useBrandFilter } from '../../hooks/brandFilter'

export function Catalogue() {
  const { products, loading } = useProducts()
  const { categoryQuery } = useCategoryFilter('category')
  const { brandQuery } = useBrandFilter('brand')

  return (
    <section className={styles.catalogue}>
      <h2 className={styles.section_header}>Catalog</h2>
      <div className={styles.catalogue__container}>
        {loading && <Loader />}
        {products
          .filter(
            (product) =>
              product.category
                .toLowerCase()
                .includes(categoryQuery.toLowerCase()) &&
              product.brand.toLowerCase().includes(brandQuery.toLowerCase())
          )
          .map((item) => (
            <Product product={item} key={item.id} />
          ))}
      </div>
    </section>
  )
}
