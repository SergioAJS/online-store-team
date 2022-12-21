import styles from './Range.module.scss'

export function RangeRaiting() {
  const maxRaiting = 5

  return (
    <span className={styles.multi_range}>
      <input
        type="range"
        min="0"
        max={maxRaiting}
        value="0"
        id="lowerRaiting"
      />
      <input
        type="range"
        min="0"
        max={maxRaiting}
        value={maxRaiting}
        id="upperRaiting"
      />
    </span>
  )
}
