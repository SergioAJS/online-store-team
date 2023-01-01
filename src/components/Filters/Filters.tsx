import styles from './Filters.module.scss'
import { useProducts } from '../../hooks/products'
import { SelectCategory } from '../Select/SelectCategory'
import { SelectBrand } from '../Select/SelectBrand'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'
import { useContext } from 'react'
import AppContext from '../../context'

export function Filters() {
  const { minPrice, maxPrice } = useProducts()
  const { onClearFilters } = useContext(AppContext)
  return (
    <section className={styles.section}>
      <h2 className={styles.section_header}>Filters</h2>
      <button className={styles.clear__filters} onClick={onClearFilters}>
        Clear Filters
      </button>
      <SelectCategory />
      <SelectBrand />
      <MultiRangeSlider
        fieldsetName="Rating"
        min={3}
        max={10}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <MultiRangeSlider
        fieldsetName="Price"
        min={minPrice}
        max={maxPrice}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </section>
  )
}
