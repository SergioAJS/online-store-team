import styles from './Filters.module.scss'
//import { useProducts } from '../../hooks/products'
import { SelectCategory } from '../Select/SelectCategory'
import { SelectBrand } from '../Select/SelectBrand'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'
import { useContext, useState } from 'react'
import AppContext from '../../context'

export function Filters() {
  //  const { maxPrice } = useProducts()
  const { onClearFilters } = useContext(AppContext)
  const [copied, setCopied] = useState(false)

  function onCopy() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    const timer = setTimeout(() => {
      setCopied(false)
    }, 700)
    return () => clearTimeout(timer)
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.section_header}>Filters</h2>
      <div className={styles.buttons}>
        <button className={styles.clear__filters} onClick={onClearFilters}>
          Clear Filters
        </button>
        <button className={styles.copy} onClick={onCopy}>
          {copied ? 'URL Copied' : 'Copy URL'}
        </button>
      </div>
      <SelectCategory />
      <SelectBrand />
      <MultiRangeSlider
        fieldsetName="Rating"
        aria-label="Rating"
        min={0}
        max={5}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <MultiRangeSlider
        fieldsetName="Price"
        aria-label="Price"
        min={0}
        max={5000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </section>
  )
}
