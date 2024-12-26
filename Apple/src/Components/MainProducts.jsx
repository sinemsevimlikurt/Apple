import React from 'react'
import { mains } from '../../sahteVeri'
import ProductCard from './ProductCard'
import "./MainProducts.css"

function MainProducts() {
  return (
    <section className='main-products top-products' style={{
      marginTop: "12%", zIndex: "2"
    }}>
      {mains.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </section>
  )
}

export default MainProducts