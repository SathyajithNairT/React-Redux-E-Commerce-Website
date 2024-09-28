import { TfiSearch } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { products } from '../base/JS/product-list'
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import hearticon from '../base/images/icon/heart.png'
import compareicon from '../base/images/icon/compare.png'
import searchicon from '../base/images/icon/search.png'


export function Shop() {

    const [shopItems, setShopItems] = useState([])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [shoppingCartClicked, setShoppingCartClicked] = useState(false)
    const [checkoutClicked, setCheckoutClicked] = useState(false)

    const listStyle = {
        maxHeight: windowWidth > 1000 ? '12rem' : '0rem'
    }

    const listContainerStyle = {
        borderBottom: windowWidth > 1000 ? '1px solid rgb(221, 213, 213)' : '0',
        paddingBottom: '2rem'
    }

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    const handleDivCollapseAndExpand = (event) => {

        const parentContainer = event.currentTarget.parentElement
        const list = parentContainer.querySelector('.shop-left-container-contents-list')

        const computedStyle = window.getComputedStyle(list)

        if (computedStyle.maxHeight === '0rem' || !list.style.maxHeight) {
            list.style.maxHeight = '12rem'
            parentContainer.style.borderBottom = '1px solid rgb(221, 213, 213)'
            parentContainer.style.paddingBottom = '2rem'
        }
        else {
            list.style.maxHeight = '0'
            parentContainer.style.borderBottom = '0'
            parentContainer.style.paddingBottom = '0'

            setTimeout(() => {
                list.style.maxHeight = ''
            }, 500)
        }
    }

    useEffect(() => {
        setShopItems(products)

        window.addEventListener('resize', handleResize)

        const pagenumber = document.querySelector('.page-number')
        pagenumber.focus()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <div className="shop-main-wrap">
            <div className="shop-header-banner">
                <div>
                    <div className="shop-banner-heading">
                        Shop
                    </div>
                    <div style={{ marginTop: '0.6rem' }}>
                        Home &gt; <span style={{ color: 'gray' }}>Shop</span>
                    </div>
                </div>
                <div>
                    <div className="cart-and-checkout-btn" style={{ marginBottom: '2rem'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>Shopping Cart <MdShoppingCart style={{fontSize: '2rem', marginLeft: '0.6rem'}}/></div>
                        <div className="blog-read-more-btn-border-bottom"></div>
                    </div>
                    <div className="cart-and-checkout-btn">
                        <div style={{display: 'flex', alignItems: 'center'}}>Checkout <MdOutlineShoppingCartCheckout style={{fontSize: '2rem', marginLeft: '0.6rem'}}/></div>
                        <div className="blog-read-more-btn-border-bottom"></div>
                    </div>
                </div>
            </div>
            <div className="shop-content-container">
                <div className="shop-left-container">
                    <div className="shop-search-wrap">
                        <input type="search" placeholder="Search..." className="shop-search" />
                        <TfiSearch className="shop-search-bar-icon" />
                    </div>
                    <div className="shop-left-container-contents" style={listContainerStyle}>
                        <div className="shop-left-container-content-heading" onClick={handleDivCollapseAndExpand}>CATEGORIES <IoIosArrowDown /></div>

                        <div className="shop-left-container-contents-list" style={listStyle}>
                            <div className="shop-left-container-contents-list-items">Men (20)</div>
                            <div className="shop-left-container-contents-list-items">Kids (20)</div>
                            <div className="shop-left-container-contents-list-items">Bages (20)</div>
                            <div className="shop-left-container-contents-list-items">Watches (20)</div>
                            <div className="shop-left-container-contents-list-items">Clothing (20)</div>
                            <div className="shop-left-container-contents-list-items">Shoes (20)</div>
                            <div className="shop-left-container-contents-list-items">Accessories (20)</div>
                            <div className="shop-left-container-contents-list-items">Wallets (20)</div>
                            <div className="shop-left-container-contents-list-items">Perfumes (20)</div>
                            <div className="shop-left-container-contents-list-items">Wearables (20)</div>
                        </div>
                    </div>
                    <div className="shop-left-container-contents">
                        <div className="shop-left-container-content-heading" onClick={handleDivCollapseAndExpand}>BRANDING <IoIosArrowDown /></div>

                        <div className="shop-left-container-contents-list">
                            <div className="shop-left-container-contents-list-items">Versace</div>
                            <div className="shop-left-container-contents-list-items">Chanel</div>
                            <div className="shop-left-container-contents-list-items">Hermès</div>
                            <div className="shop-left-container-contents-list-items">Prada</div>
                            <div className="shop-left-container-contents-list-items">Burberry</div>
                        </div>
                    </div>
                    <div className="shop-left-container-contents">
                        <div className="shop-left-container-content-heading" onClick={handleDivCollapseAndExpand}>PRICE FILTER <IoIosArrowDown /></div>

                        <div className="shop-left-container-contents-list">
                            <div className="shop-left-container-contents-list-items">₹1000 - ₹2000</div>
                            <div className="shop-left-container-contents-list-items">₹2000 - ₹4000</div>
                            <div className="shop-left-container-contents-list-items">₹4000 - ₹8000</div>
                            <div className="shop-left-container-contents-list-items">₹8000 - ₹10000</div>
                            <div className="shop-left-container-contents-list-items">₹10000+</div>
                        </div>
                    </div>
                    <div className="shop-left-container-contents">
                        <div className="shop-left-container-content-heading" onClick={handleDivCollapseAndExpand}>SIZE <IoIosArrowDown /></div>

                        <div className="shop-left-container-contents-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags">XS</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags">S</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags">M</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags">XL</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags">2XL</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags">XXL</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags">3XL</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags">4XL</div>
                        </div>
                    </div>
                    <div className="shop-left-container-contents">
                        <div className="shop-left-container-content-heading" onClick={handleDivCollapseAndExpand}>COLORS <IoIosArrowDown /></div>

                        <div className="shop-left-container-contents-list">
                            <label>
                                <input type="radio" name="color" value='' style={{ display: 'none' }} />
                                <span className="shop-color-selection-radio" style={{ backgroundColor: 'black' }}></span>
                            </label>
                            <label>
                                <input type="radio" name="color" value='' style={{ display: 'none' }} />
                                <span className="shop-color-selection-radio" style={{ backgroundColor: '#20315f' }}></span>
                            </label>
                            <label>
                                <input type="radio" name="color" value='' style={{ display: 'none' }} />
                                <span className="shop-color-selection-radio" style={{ backgroundColor: '#f1af4d' }}></span>
                            </label>
                            <label>
                                <input type="radio" name="color" value='' style={{ display: 'none' }} />
                                <span className="shop-color-selection-radio" style={{ backgroundColor: '#636068' }}></span>
                            </label>
                            <label>
                                <input type="radio" name="color" value='' style={{ display: 'none' }} />
                                <span className="shop-color-selection-radio" style={{ backgroundColor: '#57594d' }}></span>
                            </label>
                            <label>
                                <input type="radio" name="color" value='' style={{ display: 'none' }} />
                                <span className="shop-color-selection-radio" style={{ backgroundColor: '#e8bac4' }}></span>
                            </label>
                            <label>
                                <input type="radio" name="color" value='' style={{ display: 'none' }} />
                                <span className="shop-color-selection-radio" style={{ backgroundColor: '#d6c1d7' }}></span>
                            </label>
                            <label>
                                <input type="radio" name="color" value='' style={{ display: 'none' }} />
                                <span className="shop-color-selection-radio" style={{ backgroundColor: '#ed1c24' }}></span>
                            </label>
                        </div>
                    </div>
                    <div className="shop-left-container-contents">
                        <div className="shop-left-container-content-heading" onClick={handleDivCollapseAndExpand}>TAGS <IoIosArrowDown /></div>

                        <div className="shop-left-container-contents-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags recommendation-tags">PRODUCT</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags recommendation-tags">BAGS</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags recommendation-tags">SHOES</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags recommendation-tags">FASHION</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags recommendation-tags">CLOTHING</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags recommendation-tags">HATS</div>
                            <div className="shop-left-container-contents-list-items shop-left-container-tags recommendation-tags">ACCESSORIES</div>
                        </div>
                    </div>
                </div>
                <div className="shop-right-container">
                    <div className="shop-right-container-header">
                        <div>
                            Showing 1-12 of 128 results
                        </div>
                        <div>
                            Sort by Price:
                            <select name="" id="" className="shop-right-container-select">
                                <option value="">Low - High</option>
                                <option value="">High - Low</option>
                                <option value="">Premium</option>
                            </select>
                        </div>
                    </div>
                    <div className="shop-right-container-products-container">
                        {shopItems.map((product, index) => (
                            <div className={`product-card shop-product-card`} key={index}>
                                <img src={product.productImg} alt="" className="productimg" />
                                <div className="product-title">
                                    <span className="product-title-span">{product.productName}</span>
                                    <div className="add-to-cart">+ Add To Cart </div>
                                </div>
                                <div className="product-star-wrap">
                                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                                </div>
                                <div className="product-price">
                                    ₹{product.price}
                                    <div className="color-selection-wrap">
                                        <div className="color-light-blue" style={{ marginRight: '0.4rem' }}></div>
                                        <div className="color-navy-blue" style={{ marginRight: '0.4rem' }}></div>
                                        <div className="color-gold" style={{ marginRight: '0.4rem' }}></div>
                                    </div>
                                </div>
                                <div className="product-icons-wrap">
                                    <img src={hearticon} alt="" className="product-icon" />
                                    <img src={compareicon} alt="" className="product-icon" />
                                    <img src={searchicon} alt="" className="product-icon" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="shop-right-container-products-container-pageing">
                        <span className="page-number" tabIndex={0}>1</span>
                        <span className="page-number" tabIndex={0}>2</span>
                        <span className="page-number" tabIndex={0}>3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}