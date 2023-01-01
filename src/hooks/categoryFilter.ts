import { ChangeEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export function useCategoryFilter(filterProp: string) {
  const [searchCategory, setSearchCategory] = useSearchParams()
  const categoryQuery = searchCategory.get(filterProp) || ''
  const [select, setSelect] = useState(categoryQuery)

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const select = e.target
    const query = select.value
    searchCategory.set(`${filterProp}`, `${query}`)
    setSearchCategory(searchCategory)
    console.log(searchCategory)
    setSelect(query)
  }

  return { handleFilter, select, categoryQuery }
}
