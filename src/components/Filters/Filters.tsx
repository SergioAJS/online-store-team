import styles from './Filters.module.scss'
import { SelectCategory } from '../Select/SelectCategory'
import { SelectBrand } from '../Select/SelectBrand'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'

export function Filters() {
  return (
    <>
      <h2 className={styles.section_header}>Filters</h2>
      <SelectCategory />
      <SelectBrand />
      <MultiRangeSlider
        fieldsetName="Rating"
        min={0}
        max={5}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <MultiRangeSlider
        fieldsetName="Price"
        min={0}
        max={2000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </>
  )
}
