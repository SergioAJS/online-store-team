// import React, { useState } from 'react';
// import { Product } from './components/product'
// import { products } from './data/products'
// import { Modal } from './components/modal';
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../src/pages/main'
import { CartPage } from '../src/pages/cart'
import { Header } from './components/Header/Header'
import { Footer } from './components/footer/Footer'

export function App() {
  return (
    <div className="site-container">
      <div className="black"></div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
