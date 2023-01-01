import { useProducts } from '../../hooks/products'
import { Loader } from '../Loader/Loader'
import { Product } from '../Product/Product'
import styles from './Catalogue.module.scss'
import { useContext } from 'react'
import AppContext from '../../context'

export function Catalogue() {
  const { products, loading } = useProducts()

  const {
    brandSelect,
    categorySelect,
    onSearchProduct,
    productSearch,
    onSelect,
    sortSelect,
  } = useContext(AppContext)

  const filteredProducts = products.filter(
    (product) =>
      product.category
        .toLowerCase()
        .includes((categorySelect || '').toLowerCase()) &&
      product.brand.toLowerCase().includes((brandSelect || '').toLowerCase()) &&
      product.title.toLowerCase().includes((productSearch || '').toLowerCase())
  )

  if (sortSelect) {
    if (sortSelect === 'Price_ASC') {
      filteredProducts.sort((a, b) => a.price - b.price)
    } else if (sortSelect === 'Price_DESC') {
      filteredProducts.sort((a, b) => a.price - b.price).reverse()
    } else if (sortSelect === 'Rating_ASC') {
      filteredProducts.sort((a, b) => a.rating - b.rating)
    } else if (sortSelect === 'Rating_DESC') {
      filteredProducts.sort((a, b) => a.rating - b.rating).reverse()
    } else if (sortSelect === 'Discount_ASC') {
      filteredProducts.sort(
        (a, b) => a.discountPercentage - b.discountPercentage
      )
    } else if (sortSelect === 'Discount_DESC') {
      filteredProducts
        .sort((a, b) => a.discountPercentage - b.discountPercentage)
        .reverse()
    }
  }

  return (
    <section className={styles.catalogue}>
      <h2 className={styles.section_header}>Catalog</h2>
      <div className={styles.catalogue__header}>
        <select
          name="select"
          id="sortProducts"
          aria-label="Sort"
          value={sortSelect}
          onChange={onSelect}
        >
          <option value="">--Sort--</option>
          <option value="Price_ASC">By Price ASC</option>
          <option value="Price_DESC">By Price DESC</option>
          <option value="Rating_ASC">By Rating ASC</option>
          <option value="Rating_DESC">By Rating DESC</option>
          <option value="Discount_ASC">By Discount ASC</option>
          <option value="Discount_DESC">By Discount DESC</option>
        </select>
        <div>Found: {filteredProducts.length}</div>
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
        {filteredProducts.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
