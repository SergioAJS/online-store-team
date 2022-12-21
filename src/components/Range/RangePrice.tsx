import styles from './Range.module.scss'

export function RangePrice() {
  const maxPrice = 2000

  return (
    <span className={styles.multi_range}>
      <input type="range" min="0" max={maxPrice} value="0" id="lowerPrice" />
      <input
        type="range"
        min="0"
        max={maxPrice}
        value={maxPrice}
        id="upperPrice"
      />
    </span>
  )
}
