import footerlogo from '../base/images/footer-logo.png'
import paymentimg from '../base/images/payment.png'
import { MdOutlineMailOutline } from "react-icons/md";


export function Footer() {
    return (
        <div className="footer-main-wrap">
            <div className='footer-content-wrap'>
                <div className="footer-logo">
                    <img src={footerlogo} alt="" />
                    <div className='footer-motto'>
                        The customer is at the heart of our unique business model, which includes design.
                    </div>
                    <img src={paymentimg} alt="" className='paymentimg'/>
                </div>
                <div className='our-products'>
                    <div style={{ letterSpacing: '2.5px', color: 'white', fontWeight: '600' }}>
                        OUR PRODUCTS
                    </div>
                    <div style={{ marginTop: '1.2rem' }}>Clothing Store</div>
                    <div style={{ marginTop: '1.2rem' }}>Trending Shoes</div>
                    <div style={{ marginTop: '1.2rem' }}>Accessories</div>
                </div>
                <div className='shopping'>
                    <div style={{ letterSpacing: '2.5px', color: 'white', fontWeight: '600' }}>
                        SHOPPING
                    </div>
                    <div style={{ marginTop: '1.2rem' }}>Contact Us</div>
                    <div style={{ marginTop: '1.2rem' }}>Payment Methods</div>
                    <div style={{ marginTop: '1.2rem' }}>Delivery</div>
                    <div style={{ marginTop: '1.2rem' }}>Return & Exchanges</div>
                </div>
                <div className='newsletter'>
                    <div style={{ letterSpacing: '2.5px', color: 'white', fontWeight: '600' }}>
                        NEWSLETTER
                    </div>
                    <div style={{ marginTop: '1.2rem' }}>
                        Be the first to know about new arrivals, look books, sales & promos!
                    </div>
                    <div className='news-letter-email-wrap'>
                        <input type="email" className='news-letter-email' placeholder='Your email here...' />
                        <MdOutlineMailOutline style={{ fontSize: '1.8rem', marginLeft: '0.4rem' }} />
                    </div>
                </div>
            </div>
            <div className='footer-copyright-wrap'>
                <div>
                    Copyright © MaleFashion. All rights reserved
                </div>
            </div>
        </div>
    )
}