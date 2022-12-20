// import React, { useState } from 'react';
// import { Product } from './components/product'
// import { products } from './data/products'
// import { Modal } from './components/modal';
// import { CreateProduct } from './components/CreateProduct'
import { Header } from './components/Header/Header'
import { Footer } from './components/footer/Footer'

export function App() {
  return (
    <div className="site-container">
      <div className="black"></div>
      <Header />
      <main className="main container">
        <h1>Online Store</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
