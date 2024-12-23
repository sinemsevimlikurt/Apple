import React from 'react'
import { footerData } from '../sahteVeri'
import FooterComponent from './FooterComponent'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Footer({ location }) {


    return (
        <div>
            <div>
                {footerData.map((item, index) => (
                    <FooterComponent item={item} key={index} />
                ))}
            </div>
            <div>
                <p>
                    Diğer alışveriş seçenekleri: Yakınınızda bir <Link to="/retail/">Apple Store</Link> veya
                    <Link to="findone">başka bir yetkili satıcı</Link> bulun. Veya 00800 448 829 873
                    ya da 0216 282 15 11 numaralı telefonu arayın.
                </p>

            </div>
            <hr />
            <div>
                <p>
                    Telif Hakkı © 2024 Apple Inc. Tüm hakları saklıdır.
                </p>
                <p>
                    {location}
                </p>
            </div>
            <div>
                <Link to="/privacy/privacy-policy" >Gizlilik Politikası</Link>
                <Link to="/legal/privacy/tr/cookies/">Çerezlerin Kullanımı</Link>
                <Link to="/legal/internet-services/terms/site.html">Kullanım Şartları</Link>
                <Link to="/shop/browse/open/salespolicies">Satış ve Para İadesi</Link>
                <Link to="/legal/">Yasal Bilgiler</Link>
                <Link to="/sitemap">Site Haritası</Link>
            </div>
        </div>
    )
}

export default Footer 