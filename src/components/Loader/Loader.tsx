import styles from './Loader.module.scss'

export function Loader() {
  return (
    <div className={styles.loader__container}>
      <img
        className={styles.loader}
        src="./assets/images/loading.svg"
        alt="loading"
      />
    </div>
  )
}
