import React from 'react'
import { mains } from '../sahteVeri'
import Product from './Product'

function MainProductsComponent() {

  return (
    <div>
      {mains.map((item, index) => (
        <Product item={item} key={index} />
      ))}
    </div>
  )
}

export default MainProductsComponent