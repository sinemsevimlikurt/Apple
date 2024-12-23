import React from 'react'


function GiftCard() {
    return (
        <Link to="/store">
            <div className='giftcard-text'>
                <h1>Sihrinizi konuşturmak için hâlâ vakit var.</h1>
                <p>Yeni yıl için hediye listenizi tamamlayın.</p>
            </div>
            <div className='giftcard-button'>
                <button className='blue-button'>Hediye Satın Alın</button>
            </div>
        </Link>
    )
}

export default GiftCard