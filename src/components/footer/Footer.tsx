import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <a
          href="https://github.com/Andrey78945"
          className={styles.github}
          target="_blank"
          rel="noreferrer"
        >
          Andrey78945
          <img
            className={styles.githubLogo}
            src="/assets/images/githublogo.svg"
            alt="GitHub"
          />
        </a>
        <a
          href="https://github.com/SergioAJS"
          className={styles.github}
          target="_blank"
          rel="noreferrer"
        >
          SergioAJS
          <img
            className={styles.githubLogo}
            src="/assets/images/githublogo.svg"
            alt="GitHub"
          />
        </a>
        <div className={styles.year}>© 2022</div>
        <a
          href="https://rs.school/js/"
          className={styles.course}
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
    </footer>
  )
}
