import React from 'react'

function ProductCard({ item }) {
    return (
        <div className='urunler'>
            <h2>{item.name}</h2>
            <button className="blue-button">Daha Fazla Bilgi</button>
            <button className='purchase-button'>Satın Alın</button>
        </div>
    )
}

export default ProductCard