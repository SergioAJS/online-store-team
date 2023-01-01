import { ChangeEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export function useBrandFilter(filterProp: string) {
  const [searchBrand, setSearchBrand] = useSearchParams()
  const brandQuery = searchBrand.get(filterProp) || ''
  const [select, setSelect] = useState(brandQuery)

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const select = e.target
    const query = select.value
    searchBrand.set(`${filterProp}`, `${query}`)
    setSearchBrand(searchBrand)
    setSelect(query)
  }

  return { handleFilter, select, brandQuery }
}
