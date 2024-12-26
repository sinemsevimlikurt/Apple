import React from 'react'
import "./GiftCard.css"
import giftCardImage from './Images/gift-card.png'

function GiftCard() {
    return (
        <article className='gift-card'><div className="gift-header">
            <h2>Sihrinizi konuşturmak için.</h2>
            <h2>hâlâ vakit var.</h2>
        </div>
            <p>Yeni yıl için hediye listenizi tamamlayın.</p>
            <button className="blue-button" style={{ fontSize: "20px", letterSpacing: "0" }}>Hediye Satın Alın</button>
            <img src={giftCardImage} alt="Gift Cards" />
        </article>
    )
}

export default GiftCard