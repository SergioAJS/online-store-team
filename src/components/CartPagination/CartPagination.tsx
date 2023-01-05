import styles from './CartPagination.module.scss'

export interface CartPaginationProps {
  productsPerPage: number
  totalProductsInCart?: number
  paginate: (arg0: number) => void
}

export function CartPagination({
  productsPerPage,
  totalProductsInCart,
  paginate,
}: CartPaginationProps) {
  const pageNumbers = []

  if (totalProductsInCart) {
    for (
      let i = 1;
      i <= Math.ceil(totalProductsInCart / productsPerPage);
      i += 1
    ) {
      pageNumbers.push(i)
    }
  }

  return (
    <div>
      <ul className={styles.page__numbers}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.page__number}>
            <a href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
