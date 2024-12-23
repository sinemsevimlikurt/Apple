import React from 'react'
import { sahteVeri } from '../sahteVeri'
import Product from './Product'

function NewProducts() {
    return (
        <div>
            {sahteVeri.map((item, index) => (
                <Product key={index} item={item} />
            ))}
        </div>
    )
}

export default NewProducts