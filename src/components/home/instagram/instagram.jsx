import insta1 from '../../base/images/instagram/instagram-1.jpg'
import insta2 from '../../base/images/instagram/instagram-2.jpg'
import insta3 from '../../base/images/instagram/instagram-3.jpg'
import insta4 from '../../base/images/instagram/instagram-4.jpg'
import insta5 from '../../base/images/instagram/instagram-5.jpg'
import insta6 from '../../base/images/instagram/instagram-6.jpg'


export function HomeInstagram(){
    return(
        <div className="home-instagram-main-wrap">
            <div className='home-instagram-image-container'>
                <img src={insta1} alt="" />
                <img src={insta2} alt="" />
                <img src={insta3} alt="" />
                <img src={insta4} alt="" />
                <img src={insta5} alt="" />
                <img src={insta6} alt="" />
            </div>
            <div className='home-instagram-contents'>
                <div style={{fontSize: '2.5rem', fontWeight: '600', marginBottom: '2rem'}}>Instagram</div>
                <div style={{color: 'gray'}}>Check out our instagram to know about the latest trends, offers and arrivals.</div>
                <div style={{color: 'red', fontSize: '2rem', fontWeight: '600', marginTop: '4rem'}}>#Male_Fashion</div>
            </div>
        </div>
    )
}