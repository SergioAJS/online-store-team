import styles from './Select.module.scss'
import { useProducts } from '../../hooks/products'
import { useContext } from 'react'
import AppContext from '../../context'

export function SelectCategory() {
  const { categories, products } = useProducts()
  const uniqueCategories = Array.from(new Set(categories)).sort()

  const { categorySelect, onSelect } = useContext(AppContext)

  function Category(item: string, index: number) {
    return (
      <option className={styles.slc__select} value={item} key={index}>
        <>
          {
            products.filter((product) =>
              product.category.toLowerCase().includes(item.toLowerCase())
            ).length
          }
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{item}</p>
        </>
      </option>
    )
  }

  return (
    <select
      className={styles.slc__select}
      name="select"
      id="selectCategory"
      aria-label="Category"
      value={categorySelect}
      onChange={onSelect}
    >
      <option className="slc__item slc__point" value="">
        --Category--
      </option>
      {uniqueCategories.map(Category)}
    </select>
  )
}
