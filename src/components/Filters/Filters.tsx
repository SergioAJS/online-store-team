import styles from './Filters.module.scss'
import { SelectCategory } from '../Select/SelectCategory'
import { SelectBrand } from '../Select/SelectBrand'
import { RangePrice } from '../Range/RangePrice'
import { RangeRaiting } from '../Range/RangeRating'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'

export function Filters() {
  return (
    <>
      <h2 className={styles.section_header}>Filters</h2>
      <SelectCategory />
      <SelectBrand />
      <RangePrice />
      <RangeRaiting />
      <MultiRangeSlider
        min={0}
        max={10}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      {/* {RangeDual('lowerPrice', 'upperPrice')} */}
    </>
  )
}
