import React from 'react'

function FooterItem({ item }) {
    return (
        <div>
            <h6 className='footer-title'>{item.title}</h6>
            <p className='footer-p'>{item.elements}</p>
        </div>
    )
}

export default FooterItem