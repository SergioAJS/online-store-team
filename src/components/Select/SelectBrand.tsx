import { useProducts } from '../../hooks/products'
import styles from './Select.module.scss'
import { useContext } from 'react'
import AppContext from '../../context'

export function SelectBrand() {
  const { brands } = useProducts()
  const brandsSet = Array.from(new Set(brands)).sort()
  const uniqueBrands = brandsSet.filter((item) => item !== 'APPle')

  const { brandSelect, onSelect } = useContext(AppContext)

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
      value={brandSelect}
      onChange={onSelect}
    >
      <option className="slc__item slc__point" value="">
        --Brand--
      </option>

      {uniqueBrands.map(Brand)}
    </select>
  )
}
