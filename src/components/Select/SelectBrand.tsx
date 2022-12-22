import { useProducts } from '../../hooks/products'
import styles from './Select.module.scss'

export function SelectBrand() {
  const { brands } = useProducts()
  const uniqueBrands = Array.from(new Set(brands))
  // const brands = [
  //   'APPle',
  //   'Al Munakh',
  //   'AmnaMart',
  //   'Apple',
  //   'Arrivals Genuine',
  //   'BRAVE BULL',
  //   'Bake Parlor Big',
  //   'Baking Food Items',
  //   'Boho Decor',
  //   'Bracelet',
  //   'Car Aux',
  //   'Copenhagen Luxe',
  //   'Cuff Butterfly',
  //   'DADAWU',
  //   'Darojay',
  //   'Dermive',
  //   'Designer Sun Glasses',
  //   'Digital Printed',
  //   'Dry Rose',
  //   'Eastern Watches',
  //   'FREE FIRE',
  //   'Fair & Clear',
  //   'Fashion Jewellery',
  //   'Flying Wooden',
  //   'Fog Scent Xpressio',
  //   'Furniture Bed Set',
  //   'Ghazi Fabric',
  //   'Golden',
  //   'HP Pavilion',
  //   'Hemani Tea',
  //   'Huawei',
  //   'IELGY',
  //   'IELGY fashion',
  //   'Ifei Home',
  //   'Impression of Acqua Di Gio',
  //   'Infinix',
  //   'JIEPOLLY',
  //   'Kitchen Shelf',
  //   "L'Oreal Paris",
  //   'LED Lights',
  //   'Lord - Al-Rehab',
  //   'LouisWill',
  //   'Luxury Digital',
  //   'METRO 70cc Motorcycle - MR70',
  //   'Maasai Sandals',
  //   'Microsoft Surface',
  //   'Multi Purpose',
  //   'Naviforce',
  //   'Neon LED Light',
  //   'OPPO',
  //   'Professional Wear',
  //   'RED MICKY MOUSE..',
  //   'ROREC White Rice',
  //   'Ratttan Outdoor',
  //   'Royal_Mirage',
  //   'Rubber',
  //   'SKMEI 9117',
  //   'Saaf & Khaas',
  //   'Samsung',
  //   'Sandals Flip Flops',
  //   'Sneakers',
  //   'Soft Cotton',
  //   'Stainless',
  //   'Steal Frame',
  //   'Strap Skeleton',
  //   'Synthetic Leather',
  //   'TC Reusable',
  //   'The Warehouse',
  //   'Top Sweater',
  //   'Vintage Apparel',
  //   'W1209 DC12V',
  //   'Watch Pearls',
  //   'Xiangle',
  //   'YIOSI',
  //   'fauji',
  //   'lightingbrilliance',
  //   'luxury palace',
  //   'mastar watch',
  //   'shock absorber',
  // ]

  //TODO: choose TS type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Brand: any = (item: string) => (
    <option className={styles.slc__select} value={item}>
      {item}
    </option>
  )

  return (
    <select
      className={styles.slc__select}
      name="select"
      id="selectBrand"
      aria-label="Brand"
    >
      <option className="slc__item slc__point" value="">
        --Brand--
      </option>

      {uniqueBrands.map(Brand)}
    </select>
  )
}
