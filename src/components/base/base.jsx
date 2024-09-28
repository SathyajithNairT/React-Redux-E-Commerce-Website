import './base.css'
import { Banner } from "../top-banner/top-banner"
import { Header } from '../header/header'
import { Home } from '../home/home'
import { Shop } from '../shop/shop'
import { Blog } from '../blog/blog'
import { Contact } from '../contact/contact'
import { Footer } from '../footer/footer'
import { useSelector } from 'react-redux'

export function Base(){

    const home = useSelector((state) => state.headerNav.home)
    const blog = useSelector(state => state.headerNav.blog)
    const shop = useSelector(state => state.headerNav.shop)
    const contact = useSelector(state => state.headerNav.contact)

    return(
        <div className="base-main-wrap">
            <Banner />
            <Header />
            {home && <Home />}
            {shop && <Shop />}
            {blog && <Blog />}
            {contact && <Contact />}
            <Footer />
        </div>
    )
}