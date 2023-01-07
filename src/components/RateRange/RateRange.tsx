import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import AppContext from '../../context'
import { useProducts } from '../../hooks/products'
import styles from './RateRange.module.scss'

export function RateRange() {
  const { minRate, maxRate } = useProducts()
  const { onMinRate, onMaxRate, minRateCont, maxRateCont } =
    useContext(AppContext)
  const [minVal, setMinVal] = useState(minRate)
  const [maxVal, setMaxVal] = useState(maxRate)
  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)
  const range = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (minRate && maxRate) {
      setMinVal(minRate)
      setMaxVal(maxRate)
    }
  }, [maxRate, minRate])

  const getPercent = useCallback(
    (value: number) =>
      Math.round(((value - minRate) / (maxRate - minRate)) * 100),
    [minRate, maxRate]
  )

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(
        parseFloat(minRateCont as string)
          ? parseFloat(minRateCont as string)
          : minVal
      )
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent, minRateCont])

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(
        parseFloat(maxRateCont as string)
          ? parseFloat(maxRateCont as string)
          : maxVal
      )

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent, maxRateCont])

  useEffect(() => {
    ;({ min, max }: { min: number; max: number }) =>
      console.log(`min = ${min}, max = ${max}`)
  }, [minVal, maxVal])

  return (
    <div className={styles.range__container}>
      <h3 className={styles.range__title}>Rating</h3>
      <input
        type="range"
        min={minRate}
        max={maxRate}
        aria-label="minRate"
        value={minRateCont ? minRateCont : minVal}
        ref={minValRef}
        step={0.01}
        onChange={onMinRate}
        className={`${styles.thumb} ${styles.thumb_zindex_3}`}
      />
      <input
        type="range"
        min={minRate}
        max={maxRate}
        aria-label="maxRate"
        value={maxRateCont ? maxRateCont : maxVal}
        ref={maxValRef}
        step={0.01}
        onChange={onMaxRate}
        className={`${styles.thumb} ${styles.thumb_zindex_4}`}
      />
      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div className={styles.slider__range} />
        <div ref={range} className={styles.slider__range} />
        <div className={styles.slider__left_value}>
          {minRateCont ? minRateCont : minVal}
        </div>
        <div className={styles.slider__right_value}>
          {maxRateCont ? maxRateCont : maxVal}
        </div>
      </div>
    </div>
  )
}
