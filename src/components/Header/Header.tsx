import React from 'react'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <a className={styles.header__logo} href="./index.html">
          <img src="./assets/images/logo.png" alt="Online store" />
        </a>

        <nav className={`${styles.header__nav} nav`}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                <img
                  className={styles.nav__icon}
                  src="/assets/images/person.svg"
                  alt="User"
                />
                John Gald
              </a>
            </li>

            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                Logout
              </a>
            </li>

            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="./bag.html">
                <img
                  className={styles.nav__icon}
                  src="/assets/images/bag.svg"
                  alt="Person"
                />
                Bag{' '}
                <span className={`${styles.nav__bag} bag-quantity`}>
                  ( 0 items
                </span>
                <span className={`${styles.nav__bag} bag-totalToPay`}>
                  0 руб. )
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
