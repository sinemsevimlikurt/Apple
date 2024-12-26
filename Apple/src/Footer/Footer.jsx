import React from 'react'
import { footerData } from '../../sahteVeri'
import FooterItem from './FooterItem'
import "./Footer.css"

function Footer() {
    return (
        <footer>
            {footerData.map((item, index) => (
                <FooterItem key={index} item={item} />
            ))}
        </footer>
    )
}

export default Footer