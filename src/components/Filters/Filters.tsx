import styles from './Filters.module.scss'
import { useProducts } from '../../hooks/products'
import { SelectCategory } from '../Select/SelectCategory'
import { SelectBrand } from '../Select/SelectBrand'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'

export function Filters() {
  const { minPrice, maxPrice } = useProducts()
  return (
    <section className={styles.section}>
      <h2 className={styles.section_header}>Filters</h2>
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
