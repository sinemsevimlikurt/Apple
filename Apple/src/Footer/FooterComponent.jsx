import React from 'react'

function FooterComponent({ item }) {
    return (
        <div>
            <h6>{item.title}</h6>
            {item.elements.map((element, index) => (
                <p className='footers-p' key={index}>{element}</p>
            ))}
        </div>
    )
}

export default FooterComponent