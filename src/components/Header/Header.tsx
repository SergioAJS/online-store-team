import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export function Header({
  itemsInCart,
  cartPrice,
}: {
  itemsInCart: number
  cartPrice: number
}) {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <Link to="/" className={styles.header__logo}>
          <img src="./assets/images/logo.png" alt="Online store" />
        </Link>

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
