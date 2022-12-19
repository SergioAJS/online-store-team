import React from 'react'
// import styles from './Header.module.scss'

export function Header() {
  return (
    // <div className={styles.header}>
    <header className="header">
      <div className="header__container container">
        <a className="header__logo" href="./index.html">
          <img src="./assets/images/logo.png" alt="Online store" />
        </a>

        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">
                <img
                  className="nav__icon"
                  src="/assets/images/person.svg"
                  alt="User"
                />
                John Gald
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#">
                Logout
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="./bag.html">
                <img
                  className="nav__icon"
                  src="/assets/images/bag.svg"
                  alt="Person"
                />
                Bag <span className="nav__bag bag-quantity">( 0 items</span>
                <span className="nav__bag bag-totalToPay"> 0 руб.)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    // </div>
  )
}
