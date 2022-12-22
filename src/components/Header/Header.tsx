import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export function Header() {
  const cartPrice: number =
    localStorage.cartPrice !== undefined
      ? JSON.parse(localStorage.cartPrice)
      : 0
  const itemsInCart: number =
    localStorage.itemsInCart !== undefined
      ? JSON.parse(localStorage.itemsInCart)
      : 0
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
              <Link to="/" className={styles.nav__link}>
                Catalog
              </Link>
            </li>

            <li className={styles.nav__item}>
              <Link to="/cart" className={styles.nav__link}>
                <img
                  className={styles.nav__icon}
                  src="/assets/images/bag.svg"
                  alt="Person"
                />
                Cart{' '}
                <span className={`${styles.nav__bag} bag-quantity`}>
                  ( {itemsInCart} items{' '}
                </span>
                <span className={`${styles.nav__bag} bag-totalToPay`}>
                  {cartPrice} $ )
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
