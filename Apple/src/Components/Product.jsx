import React from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'

function Product({ item }) {
    const { id } = useParams()


    return (
        <Link to={`/${id}`} >
            <div style={{ backgroundImage: item.image }}>
                <h1>{item.name}</h1>
                <div>
                    <button className='blue-button'>Daha Fazla Bilgi</button>
                    <button className='buy-button'>Satın Al</button>
                </div>
            </div>
        </Link >
    )
}

export default Product 