import { useProducts } from '../../hooks/products'
import { Loader } from '../Loader/Loader'
import { Product } from '../Product/Product'
import { ProductInLine } from '../Product/ProductInLine'
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
    viewSelect,
  } = useContext(AppContext)

  const filteredProducts = products.filter(
    (product) =>
      (product.category
        .toLowerCase()
        .includes((categorySelect || '').toLowerCase()) &&
        product.brand
          .toLowerCase()
          .includes((brandSelect || '').toLowerCase()) &&
        product.title
          .toLowerCase()
          .includes((productSearch || '').toLowerCase())) ||
      (product.category
        .toLowerCase()
        .includes((categorySelect || '').toLowerCase()) &&
        product.brand
          .toLowerCase()
          .includes((brandSelect || '').toLowerCase()) &&
        product.price
          .toString()
          .includes((productSearch || '').toLowerCase())) ||
      (product.category
        .toLowerCase()
        .includes((categorySelect || '').toLowerCase()) &&
        product.brand
          .toLowerCase()
          .includes((brandSelect || '').toLowerCase()) &&
        product.description
          .toLowerCase()
          .includes((productSearch || '').toLowerCase())) ||
      (product.category
        .toLowerCase()
        .includes((categorySelect || '').toLowerCase()) &&
        product.brand
          .toLowerCase()
          .includes((brandSelect || '').toLowerCase()) &&
        product.stock
          .toString()
          .includes((productSearch || '').toLowerCase())) ||
      (product.category
        .toLowerCase()
        .includes((categorySelect || '').toLowerCase()) &&
        product.brand
          .toLowerCase()
          .includes((brandSelect || '').toLowerCase()) &&
        product.rating
          .toString()
          .includes((productSearch || '').toLowerCase())) ||
      (product.category
        .toLowerCase()
        .includes((categorySelect || '').toLowerCase()) &&
        product.brand
          .toLowerCase()
          .includes((brandSelect || '').toLowerCase()) &&
        product.discountPercentage
          .toString()
          .includes((productSearch || '').toLowerCase())) ||
      (product.category
        .toLowerCase()
        .includes((categorySelect || '').toLowerCase()) &&
        product.brand
          .toLowerCase()
          .includes((brandSelect || '').toLowerCase()) &&
        product.category
          .toLowerCase()
          .includes((productSearch || '').toLowerCase())) ||
      (product.category
        .toLowerCase()
        .includes((categorySelect || '').toLowerCase()) &&
        product.brand
          .toLowerCase()
          .includes((brandSelect || '').toLowerCase()) &&
        product.brand
          .toLowerCase()
          .includes((productSearch || '').toLowerCase()))
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
          className={styles.sort}
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
          className={styles.search}
          type="search"
          name="search"
          id="searchProduct"
          placeholder="search product"
          aria-label="Search"
          value={productSearch}
          onChange={onSearchProduct}
        />
        <div>
          <span>View: </span>
          <select
            className={styles.sort}
            name="select"
            id="viewProducts"
            aria-label="View"
            value={viewSelect}
            onChange={onSelect}
          >
            <option value="Block">Block</option>
            <option value="Line">Line</option>
          </select>
        </div>
      </div>
      <div className={styles.catalogue__container}>
        {loading && <Loader />}
        {filteredProducts.length === 0 ? (
          <p className={styles.not__found}>Products not found</p>
        ) : viewSelect === 'Line' ? (
          filteredProducts.map((item) => (
            <ProductInLine product={item} key={item.id} />
          ))
        ) : (
          filteredProducts.map((item) => (
            <Product product={item} key={item.id} />
          ))
        )}
      </div>
    </section>
  )
}
