import { useState } from 'react'
import hero1 from '../../base/images/hero/hero-1.jpg'
import hero2 from '../../base/images/hero/hero-2.jpg'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";


export function HomeHero() {

    const [heroIndex, setHeroIndex] = useState(0)
    const [fade, setFade] = useState('fade-in')
    const [emerge, setEmerge] = useState('emerge-from-bottom')

    const heros = [hero1, hero2]

    const handleArrowClick = (value) => {

        setFade('fade-out')
        setEmerge('fade-to-bottom')
        setTimeout(() => {
            if (heroIndex === (heros.length - 1)) {
                setHeroIndex(0)
            }
            else if (heroIndex === 0) {
                setHeroIndex(heros.length - 1)
            }
            else {
                setHeroIndex(heroIndex + value)
            }

            setFade('fade-in')
            setEmerge('emerge-from-bottom')
        }, 400)
    }

    return (
        <div className="homehero-main-wrap">
            <img src={heros[heroIndex]} alt="" className={`homeheroimg ${fade}`} />
            <FaArrowLeftLong className='hero-nav-arrowleft' onClick={() => handleArrowClick(-1)} />
            <FaArrowRightLong className='hero-nav-arrowright' onClick={() => handleArrowClick(1)} />
            <div className={`hero-contents ${emerge}`}>
                <div className='hero-heading'>SUMMER COLLECTION</div>
                <div className='hero-main-heading'>
                    Fall - Winter <span style={{ display: 'block' }}>Collections 2024</span>
                </div>
                <div className='hero-description'>
                    A specialist label creating luxuary essentials. Ethically crafted with an unwavering
                    commitment to exceptional quality.
                </div>
                <div className='hero-btn-wrap'>
                    <button className='hero-btn'>SHOP NOW <FaArrowRightLong /></button>
                </div>
            </div>
            <div className='hero-social-media'>
                <FaFacebookF style={{ marginRight: '2rem' }} />
                <FaTwitter style={{ marginRight: '2rem' }} />
                <FaPinterest style={{ marginRight: '2rem' }} />
                <FaInstagram />
            </div>
        </div>
    )
}