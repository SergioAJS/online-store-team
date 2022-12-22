import React from 'react'
import { Filters } from '../components/Filters/Filters'
import { Catalogue } from '../components/Catalogue/Catalogue'

export function MainPage() {
  return (
    <main className="main">
      <h1>Online Store</h1>
      <div className="main__container container">
        <Filters />
        <Catalogue />
      </div>
    </main>
  )
}
