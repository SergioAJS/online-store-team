// import React, { useState } from 'react';
// import { Product } from './components/product'
// import { products } from './data/products'
// import { Modal } from './components/modal';
import { Filters } from './components/Filters/Filters'
import { Header } from './components/Header/Header'
import { Footer } from './components/footer/Footer'

export function App() {
  return (
    <div className="site-container">
      <div className="black"></div>
      <Header />
      <main className="main">
        <div className="main-container container">
          <h1>Online Store</h1>
          <Filters />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
