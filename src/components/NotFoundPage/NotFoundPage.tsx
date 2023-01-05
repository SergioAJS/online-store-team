import styles from './NotFoundPage.module.scss'

export function NotFoundPage() {
  return (
    <main className="main">
      <div className={styles.not__found}>
        Page not Found
        <h1 className={styles.not__found_title}>404</h1>
      </div>
    </main>
  )
}
