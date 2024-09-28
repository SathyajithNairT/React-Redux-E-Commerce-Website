import clothingbanner from '../../base/images/banner/banner-1.jpg'
import accessoriesbanner from '../../base/images/banner/banner-2.jpg'
import shoesbanner from '../../base/images/banner/banner-3.jpg'

export function HomeBanner() {
    return (
        <div className="home-banner-main-wrap">
            <div className="home-banner-clothing-collection">
                <img src={clothingbanner} alt="" className='homebannerimg' />
                <div className='home-banner-clothing-collection-contents'>
                    <div className='home-banner-heading'>
                        Clothing <span style={{ display: 'block' }}> Collections 2024</span>
                    </div>
                    <div className='home-banner-btn'>
                        SHOP NOW
                        <div className='border-banner-btn'></div>
                    </div>
                </div>
            </div>
            <div className="home-banner-accessories">
                <img src={accessoriesbanner} alt="" className='homebannerimg' />
                <div className='home-banner-accessories-contents'>
                    <div className='home-banner-heading'>
                        Accessories
                    </div>
                    <div className='home-banner-btn'>
                        SHOP NOW
                        <div className='border-banner-btn'></div>
                    </div>
                </div>
            </div>
            <div className="home-banner-shoes">
                <img src={shoesbanner} alt="" className='homebannerimg' />
                <div className='home-banner-shoes-contents'>
                    <div className='home-banner-heading'>
                        Shoe Spring <span style={{ display: 'block' }}>2024</span>
                    </div>
                    <div className='home-banner-btn'>
                        SHOP NOW
                        <div className='border-banner-btn'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}