import { useProducts } from '../../hooks/products'
import { Loader } from '../Loader/Loader'
import { Product } from '../Product/Product'
import styles from './Catalogue.module.scss'
import { useContext } from 'react'
import AppContext from '../../context'

export function Catalogue() {
  const { products, loading } = useProducts()

  const { brandSelect, categorySelect, onSearchProduct, productSearch } =
    useContext(AppContext)

  return (
    <section className={styles.catalogue}>
      <h2 className={styles.section_header}>Catalog</h2>
      <div className={styles.catalogue__header}>
        <select name="select" id="sortProducts" aria-label="Category"></select>
        <div>Found: {products.length}</div>
        <input
          type="search"
          name="search"
          id="searchProduct"
          placeholder="search product"
          aria-label="Search"
          onChange={onSearchProduct}
        />
      </div>
      <div className={styles.catalogue__container}>
        {loading && <Loader />}
        {products
          .filter(
            (product) =>
              product.category
                .toLowerCase()
                .includes((categorySelect || '').toLowerCase()) &&
              product.brand
                .toLowerCase()
                .includes((brandSelect || '').toLowerCase()) &&
              product.title
                .toLowerCase()
                .includes((productSearch || '').toLowerCase())
          )
          .map((item) => (
            <Product product={item} key={item.id} />
          ))}
      </div>
    </section>
  )
}
