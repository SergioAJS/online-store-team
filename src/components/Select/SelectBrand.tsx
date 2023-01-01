import { useProducts } from '../../hooks/products'
import styles from './Select.module.scss'
import { useBrandFilter } from '../../hooks/brandFilter'

export function SelectBrand() {
  const { handleFilter, select } = useBrandFilter('brand')
  const { brands } = useProducts()
  const uniqueBrands = Array.from(new Set(brands)).sort()

  function Brand(item: string, index: number) {
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
      id="selectBrand"
      aria-label="Brand"
      value={select}
      onChange={handleFilter}
    >
      <option className="slc__item slc__point" value="">
        --Brand--
      </option>

      {uniqueBrands.map(Brand)}
    </select>
  )
}
