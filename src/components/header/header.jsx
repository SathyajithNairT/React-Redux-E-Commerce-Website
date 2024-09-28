import logo from '../base/images/logo/logo.png'
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { setHome, setBlog, setShop, setContact } from '../../redux/slices/header-nav-slice';
import { useState } from 'react';

export function Header() {

    const dispatch = useDispatch()

    const [hamIconClicked, setHamIconClicked] = useState(false)

    const handleHamIconClick = () => {
        setHamIconClicked(!hamIconClicked)
    }

    const handleNavClick = (action, isHamIconClick = false) => {
        dispatch(action())

        if (isHamIconClick){
            setHamIconClicked(false)
        }
    }

    return (
        <div className="header-main-wrap">
            <img src={logo} alt="" className='header-logo' />
            <div className='header-nav-wrap'>
                <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => handleNavClick(setHome)}>
                    Home
                </div>
                <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => handleNavClick(setShop)}>
                    Shop
                </div>
                <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => handleNavClick(setBlog)}>
                    Blog
                </div>
                <div style={{ cursor: 'pointer' }} onClick={() => handleNavClick(setContact)}>
                    Contact Us
                </div>
            </div>
            <div className='header-right-contents'>
                <div className='header-search' style={{ marginRight: '2.5rem' }}>
                    <FaSearch />
                </div>
                <div className='header-favourites' style={{ marginRight: '2.5rem' }}>
                    <FaRegHeart />
                </div>
                <div className='header-cart' style={{ display: 'flex', alignItems: 'center' }}>
                    <MdOutlineShoppingBag style={{ fontSize: '1.5rem', marginRight: '0.4rem' }} /><span>₹0.00</span>
                </div>
            </div>
            <div className='ham-icon'>
                <RxHamburgerMenu style={{ fontSize: '2rem' }} onClick={handleHamIconClick}/>
            </div>


            <div className='ham-icon-draw' style={{display: hamIconClicked ? 'block' : 'none'}}>
                <div className='ham-icon-draw-header'>
                    <div className='ham-icon-header-banner'>
                        <div>SIGN IN</div>
                        <div>FAQs</div>
                        <div>
                            <select name="" id="" className="banner-currency-select" style={{ color: 'black' }}>
                                <option value="">INR (₹)</option>
                                <option value="">USD ($)</option>
                                <option value="">EUR (€)</option>
                            </select>
                        </div>
                    </div>
                    <div className='header-right-contents ham-icon-draw-header-icons' style={{display: 'flex'}}>
                        <div className='header-search' style={{ marginRight: '2.5rem' }}>
                            <FaSearch />
                        </div>
                        <div className='header-favourites' style={{ marginRight: '2.5rem' }}>
                            <FaRegHeart />
                        </div>
                        <div className='header-cart' style={{ display: 'flex', alignItems: 'center' }}>
                            <MdOutlineShoppingBag style={{ fontSize: '1.5rem', marginRight: '0.4rem' }} /><span>₹0.00</span>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <div className='header-nav-wrap ham-icon-draw-nav' style={{display: 'flex'}}>
                        <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => handleNavClick(setHome, true)}>
                            Home
                        </div>
                        <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => handleNavClick(setShop, true)}>
                            Shop
                        </div>
                        <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => handleNavClick(setBlog, true)}>
                            Blog
                        </div>
                        <div style={{ cursor: 'pointer' }} onClick={() => handleNavClick(setContact, true)}>
                            Contact Us
                        </div>
                    </div>
                </div>
                <div className="banner-left-contents ham-icon-draw-guarantee">
                    Free Shipping, 30-day return or refund guarantee.
                </div>
            </div>
        </div>
    )
}