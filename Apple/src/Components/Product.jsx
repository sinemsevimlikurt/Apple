import React from 'react'
import { sahteVeri } from '../../sahteVeri'
import ProductCard from './ProductCard'
import "./MainProducts.css"

function Products() {
    return (
        <section className='main-products products' >
            {sahteVeri.map((item, index) => (
                <ProductCard key={index} item={item} />
            ))}
        </section>
    )
}

export default Products