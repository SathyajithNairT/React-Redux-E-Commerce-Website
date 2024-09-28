


export function Banner() {
    return (
        <div className="banner-main-wrap">
            <div className="banner-left-contents">
                Free Shipping, 30-day return or refund guarantee.
            </div>
            <div className="banner-right-contents">
                <div style={{marginRight: '2rem'}}>
                    SIGN IN
                </div>
                <div style={{marginRight: '2rem'}}>
                    FAQs
                </div>
                <div>
                    <select name="" id="" className="banner-currency-select">
                        <option value="">INR (₹)</option>
                        <option value="">USD ($)</option>
                        <option value="">EUR (€)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}