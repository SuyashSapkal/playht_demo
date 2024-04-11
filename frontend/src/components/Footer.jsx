import './Footer.css';

export default function Footer(){
    return(
        <div className="footer">
            <div className='item'>
                <p className="web_link" href="https://play.ht/">Official Website: play.ht</p>
                <div className="note">
                    Note: This is not an official website. This is just a test mockup
                </div>
                <div className="email">creator email: suyashsapkal21@gmail.com</div>
            </div>
            <div className='item'>
                For more information 
                <span className="web_link" href="https://play.ht/contact-us/"> Contact Us</span>
            </div>
        </div>
    )
}