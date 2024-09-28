import { HomeHero } from "./hero/hero"
import { HomeBanner } from "./banner/banner"
import { Products } from "./products/products"
import { HomeInstagram } from "./instagram/instagram"
import { HomeNews } from "./news/news"


export function Home(){
    return(
        <div className="home-main-wrap">
            <HomeHero />
            <HomeBanner />
            <Products />
            <HomeInstagram />
            <HomeNews />
        </div>
    )
}