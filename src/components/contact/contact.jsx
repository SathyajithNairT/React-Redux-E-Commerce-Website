


export function Contact() {
    return (
        <div className="contact-main-wrap">
            <div className="map-wrap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3651.5660956247502!2d75.20130162438387!3d13.160609625044055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1727359083835!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="contact-map"
                ></iframe>
            </div>
            <div className="contact-contents">
                <div className="contact-left-contents">
                    <div className="contact-heading">
                        INFORMATION
                    </div>
                    <div className="contact-main-heading">
                        Contact Us
                    </div>
                    <div className="contact-description">
                        As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
                    </div>
                    <div className="contact-loaction">
                        <div className="location-heading">
                            INDIA
                        </div>
                        <div className="location-address">
                            Bagmane Laurel, Krishnappa Garden, C V Raman Nagar, Bengaluru, Karnataka 560093
                        </div>
                        <div className="location-address">
                            SGV Infrastructure Pvt Ltd. 4th floor, Commerce House, Judges Bunglow Road, Bodakdev, Ahmedabad – 380054
                        </div>
                    </div>
                </div>
                <div className="contact-right-contents">
                    <div className="contact-name-email-input-wrap">
                        <input type="text" className="contact-name-email-input" placeholder="Name" style={{ marginRight: '2rem' }} />
                        <input type="email" className="contact-name-email-input" placeholder="Email" />
                    </div>
                    <div className="contact-message-wrap">
                        <textarea name="" id="" className="contact-message" placeholder="Message"></textarea>
                    </div>
                    <div className="contact-btn-wrap">
                        <button className="contact-btn">SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}