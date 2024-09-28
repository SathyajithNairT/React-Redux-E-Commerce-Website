import { useEffect, useState } from "react"
import { products } from "../../base/JS/product-list"
import { FaRegStar } from "react-icons/fa";
import hearticon from '../../base/images/icon/heart.png'
import compareicon from '../../base/images/icon/compare.png'
import searchicon from '../../base/images/icon/search.png'



export function Products() {

    const [productlist, setProductList] = useState([])
    const [activeNav, setActiveNav] = useState('bestSeller')
    const [fliteredProductList, setFilteredProductList] = useState([])
    const [fadeAnimation, setFadeAnimation] = useState('')

    const handleNavClick = (value) => {
        setActiveNav(value)
        setFadeAnimation('product-card-fade-out')

        setTimeout(() => {
            var filteredList = products.filter(product => product[value] === true)
            setFilteredProductList(filteredList)
            setFadeAnimation('product-card-fade-in')
        }, 200)
    }

    useEffect(() => {
        setProductList(products)
        var filteredList = []
        products.map(product => {
            if (product.bestSeller === true) {
                filteredList.push(product)
            }
        })
        setFilteredProductList(filteredList)
    }, [])

    return (
        <div className="home-products-main-wrap">
            <div className="home-products-categories">
                <div
                    className="home-products-categories-nav"
                    onClick={() => handleNavClick('bestSeller')}
                    style={{ marginRight: '5rem', color: activeNav === 'bestSeller' ? 'black' : '', cursor: 'pointer' }}
                >
                    Best Sellers
                </div>
                <div
                    className="home-products-categories-nav"
                    onClick={() => handleNavClick('newArrival')}
                    style={{ marginRight: '5rem', color: activeNav === 'newArrival' ? 'black' : '', cursor: 'pointer' }}
                >
                    New Arrivals
                </div>
                <div
                    className="home-products-categories-nav"
                    onClick={() => handleNavClick('hotSale')}
                    style={{ color: activeNav === 'hotSale' ? 'black' : '', cursor: 'pointer' }}
                >
                    Hot Sales
                </div>
            </div>
            <div className="home-product-container">
                {fliteredProductList.map((product, index) => (
                    <div className={`product-card ${fadeAnimation}`} key={index}>
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
        </div>
    )
}