import React, { ChangeEvent, useState } from 'react'
import { ProductInCart } from '../components/Product/ProductInCart'
import AppContext from '../context'
import { Modal } from '../components/Modal/Modal'
import { useLocation } from 'react-router-dom'
import { CartPagination } from '../components/CartPagination/CartPagination'
import styles from './cart.module.scss'

export function CartPage() {
  const {
    cart,
    onRemoveFromCart,
    onAddOne,
    onRemoveOne,
    itemsInCart,
    cartPrice,
    modal,
    setModal,
  } = React.useContext(AppContext)
  let sectionTitle = 'Cart'
  let isCartNotEmpty = true
  if (cart === undefined || cart.length === 0) {
    isCartNotEmpty = false
    sectionTitle = 'YOUR CART IS EMPTY'
  }

  const { state } = useLocation()
  if (state) {
    const { modalOuter } = state
    if (modalOuter) setModal?.(modalOuter)
  }

  const onOpenModal = () => {
    setModal?.(true)
  }

  const promo1 = ['rs', 10]
  const promo2 = ['school', 15]
  const [isValidPromo1, setIsValidPromo1] = useState(false)
  const [isValidPromo2, setIsValidPromo2] = useState(false)
  const [isApplyPromo1, setIsApplyPromo1] = useState(false)
  const [isApplyPromo2, setIsApplyPromo2] = useState(false)

  function onEnterPromo(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const enteredPromo = e.target.value
    if (promo1[0] === enteredPromo) {
      setIsValidPromo1(true)
    } else {
      setIsValidPromo1(false)
    }
    if (promo2[0] === enteredPromo) {
      setIsValidPromo2(true)
    } else {
      setIsValidPromo2(false)
    }
  }

  function onApplyPromo1() {
    setIsApplyPromo1(true)
  }

  function onApplyPromo2() {
    setIsApplyPromo2(true)
  }

  function onDenyPromo1() {
    setIsApplyPromo1(false)
  }

  function onDenyPromo2() {
    setIsApplyPromo2(false)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPage] = useState(3)
  // const [currentProducts, setCurrentProducts] = useState()

  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const currentProducts = cart?.slice(firstProductIndex, lastProductIndex)

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber)
  }

  function increaseProductsPerPage() {
    if (cart && productsPerPage < cart?.length) {
      setProductsPage(productsPerPage + 1)
    } else {
      return
    }
  }

  function decreaseProductsPerPage() {
    if (productsPerPage > 1) {
      setProductsPage(productsPerPage - 1)
    } else {
      return
    }
  }

  return (
    <main className="main">
      <h1 className="visually-hidden">Cart</h1>
      <section className="section">
        <div className="cart container">
          <div className="cart__container">
            {/* {cart &&
              cart.map((item, index) => (
                <p key={index}>{currentPage * productsPerPage - index}</p>
              ))} */}
            <h2 className="catalog__title section-title">{sectionTitle}</h2>
            <ul className="card__list">
              {cart &&
                currentProducts?.map((item, index) => (
                  <div className={styles.card__container} key={item.id}>
                    <p>
                      {currentPage * productsPerPage +
                        index -
                        productsPerPage +
                        1}
                    </p>
                    <li className="card__item" key={item.id}>
                      <ProductInCart product={item} />
                      <button
                        className="card__buttons btn-gray"
                        onClick={() => onAddOne?.(item)}
                      >
                        +
                      </button>
                      <span className="card__quantity">{item.inCart}</span>
                      <button
                        className="card__buttons btn-gray"
                        onClick={() => onRemoveOne?.(item)}
                      >
                        -
                      </button>
                      <button
                        className="btn card__button delete-btn delete-btn-visible"
                        data-index={item.id}
                        title="Remove from cart"
                        onClick={() => onRemoveFromCart?.(item)}
                      >
                        X
                      </button>
                    </li>
                  </div>
                ))}
            </ul>
            {isCartNotEmpty && (
              <>
                <button onClick={decreaseProductsPerPage}>{'<'}</button>
                <p>{productsPerPage}</p>
                <button onClick={increaseProductsPerPage}>{'>'}</button>
              </>
            )}
            <CartPagination
              productsPerPage={productsPerPage}
              totalProductsInCart={cart?.length}
              currentProducts={currentProducts}
              paginate={paginate}
            />
          </div>
          {isCartNotEmpty && (
            <div className="summary">
              <h2 className="section-title">Summary</h2>
              <p>Products: {itemsInCart}</p>
              {isApplyPromo1 && isApplyPromo2 && cartPrice ? (
                <>
                  <p className="with-promo">{`Total: $${
                    cartPrice && cartPrice.toFixed(2)
                  }`}</p>
                  <p>{`Total: $${(cartPrice * 0.75).toFixed(2)}`}</p>
                </>
              ) : isApplyPromo1 && cartPrice ? (
                <>
                  <p className="with-promo">{`Total: $${
                    cartPrice && cartPrice.toFixed(2)
                  }`}</p>
                  <p>{`Total: $${(cartPrice * 0.9).toFixed(2)}`}</p>
                </>
              ) : isApplyPromo2 && cartPrice ? (
                <>
                  <p className="with-promo">{`Total: $${
                    cartPrice && cartPrice.toFixed(2)
                  }`}</p>
                  <p>{`Total: $${(cartPrice * 0.85).toFixed(2)}`}</p>
                </>
              ) : (
                <p className="without-promo">{`Total: $${
                  cartPrice && cartPrice.toFixed(2)
                }`}</p>
              )}
              {isApplyPromo1 && isApplyPromo2 ? (
                <div className="applied-promos">
                  <h3>Applied promos</h3>
                  <p>rs promo: 10% discount</p>
                  <button
                    className="confirm-btn"
                    value="promo1"
                    onClick={onDenyPromo1}
                  >
                    Deny
                  </button>
                  <p>school promo: 15% discount</p>
                  <button
                    className="confirm-btn"
                    value="promo2"
                    onClick={onDenyPromo2}
                  >
                    Deny
                  </button>
                </div>
              ) : isApplyPromo2 ? (
                <div className="applied-promos">
                  <h3>Applied promos</h3>
                  <p>school promo: 15% discount</p>
                  <button
                    className="confirm-btn"
                    value="promo2"
                    onClick={onDenyPromo2}
                  >
                    Deny
                  </button>
                </div>
              ) : isApplyPromo1 ? (
                <div className="applied-promos">
                  <h3>Applied promos</h3>
                  <p>rs promo: 10% discount</p>
                  <button
                    className="confirm-btn"
                    value="promo1"
                    onClick={onDenyPromo1}
                  >
                    Deny
                  </button>
                </div>
              ) : (
                <></>
              )}
              <input
                className="promo-search"
                type="search"
                name="promo"
                id="promo"
                placeholder="Enter promo code"
                onChange={onEnterPromo}
              />
              <p>Promo for test: `rs`, `school`</p>
              {isValidPromo1 && (
                <div className="promo-enter">
                  <p>rs: 10% discount</p>
                  <button className="confirm-btn" onClick={onApplyPromo1}>
                    Apply promo code
                  </button>
                </div>
              )}
              {isValidPromo2 && (
                <div className="promo-enter">
                  <p>school: 15% discount</p>
                  <button className="confirm-btn" onClick={onApplyPromo2}>
                    Apply promo code
                  </button>
                </div>
              )}
              <button
                className="confirm-btn"
                onClick={() => {
                  if (!modal) onOpenModal()
                }}
              >
                Confirm order
              </button>
            </div>
          )}
        </div>
      </section>
      <Modal />
    </main>
  )
}
