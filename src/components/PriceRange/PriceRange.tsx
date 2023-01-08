import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import AppContext from '../../context'
import { useProducts } from '../../hooks/products'
import styles from './PriceRange.module.scss'

export function PriceRange() {
  const { minPrice, maxPrice } = useProducts()
  const { onMinPrice, onMaxPrice, minPriceCont, maxPriceCont } =
    useContext(AppContext)
  const [minVal, setMinVal] = useState(minPrice)
  const [maxVal, setMaxVal] = useState(maxPrice)
  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)
  const range = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (minPrice && maxPrice) {
      setMinVal(minPrice)
      setMaxVal(maxPrice)
    }
  }, [maxPrice, minPrice])

  const getPercent = useCallback(
    (value: number) =>
      Math.round(((value - minPrice) / (maxPrice - minPrice)) * 100),
    [minPrice, maxPrice]
  )

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(
        parseInt(minPriceCont as string)
          ? parseInt(minPriceCont as string)
          : minVal
      )
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent, minPriceCont])

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(
        parseInt(maxPriceCont as string)
          ? parseInt(maxPriceCont as string)
          : maxVal
      )

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent, maxPriceCont])

  useEffect(() => {
    ;({ min, max }: { min: number; max: number }) =>
      console.log(`min = ${min}, max = ${max}`)
  }, [minVal, maxVal])

  return (
    <div className={styles.range__container}>
      <h3 className={styles.range__title}>Price</h3>
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        aria-label="minPrice"
        value={minPriceCont ? minPriceCont : minVal}
        ref={minValRef}
        onChange={onMinPrice}
        className={`${styles.thumb} ${styles.thumb_zindex_3}`}
      />
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        aria-label="maxPrice"
        value={maxPriceCont ? maxPriceCont : maxVal}
        ref={maxValRef}
        onChange={onMaxPrice}
        className={`${styles.thumb} ${styles.thumb_zindex_4}`}
      />
      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div className={styles.slider__range} />
        <div ref={range} className={styles.slider__range} />
        <div className={styles.slider__left_value}>
          ${minPriceCont ? minPriceCont : minVal}
        </div>
        <div className={styles.slider__right_value}>
          ${maxPriceCont ? maxPriceCont : maxVal}
        </div>
      </div>
    </div>
  )
}
