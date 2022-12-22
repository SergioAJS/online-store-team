import styles from './Select.module.scss'
import { useProducts } from '../../hooks/products'

export function SelectCategory() {
  const { categories } = useProducts()
  const uniqueCategories = Array.from(new Set(categories))

  // const categories: string[] = [
  //   'automotive',
  //   'fragrances',
  //   'furniture',
  //   'groceries',
  //   'home-decoration',
  //   'laptops',
  //   'lighting',
  //   'mens-shirts',
  //   'mens-shoes',
  //   'mens-watches',
  //   'motorcycle',
  //   'skincare',
  //   'smartphones',
  //   'sunglasses',
  //   'tops',
  //   'womens-bags',
  //   'womens-dresses',
  //   'womens-jewellery',
  //   'womens-shoes',
  //   'womens-watches',
  // ]

  //TODO: choose TS type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Option: any = (item: string) => (
    <option className={styles.slc__select} value={item}>
      {item}
    </option>
  )

  return (
    <select
      className={styles.slc__select}
      name="select"
      id="selectCategory"
      aria-label="Category"
    >
      <option className="slc__item slc__point" value="">
        --Category--
      </option>
      {uniqueCategories.map(Option)}
    </select>
  )
}
