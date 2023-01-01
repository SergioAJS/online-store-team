import styles from './Select.module.scss'
import { useProducts } from '../../hooks/products'
import { useCategoryFilter } from '../../hooks/categoryFilter'

export function SelectCategory() {
  const { handleFilter, select } = useCategoryFilter('category')
  const { categories } = useProducts()
  const uniqueCategories = Array.from(new Set(categories)).sort()

  function Category(item: string, index: number) {
    return (
      <option className={styles.slc__select} value={item} key={index}>
        {item}
      </option>
    )
  }

  return (
    <select
      className={styles.slc__select}
      name="select"
      id="selectCategory"
      aria-label="Category"
      value={select}
      onChange={handleFilter}
    >
      <option className="slc__item slc__point" value="">
        --Category--
      </option>
      {uniqueCategories.map(Category)}
    </select>
  )
}
