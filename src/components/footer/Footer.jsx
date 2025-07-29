import React from 'react'
import './footer.css'
import logo from '../assets/images/footer-logo.png'
import Appstore from '../assets/images/appStore.png'
import Playstore from '../assets/images/googlePlay.png'

const Footer = () => {
  return (
    <div className='footer w-100'>
        <div className='footer-flex w-85 flex m-auto'>
            <div className='footer-intro'>
                <div className='logo'>
                    <img src={logo} />
                </div>
                <div className='footer-text'>
                    <p>Create codes with our free QR generator of codes.<br/> Comprehensible interface, variety in choosing the type of your QR-code, the ability to view statistics!</p>
                </div>
                <div className='footer-btns'>
                    <div className='download-text'>
                        <h3>Download Our App</h3>
                        <p>Now it’s simple and easy to create and scan QR Codes!</p>
                    </div>
                    <div className='Download-links flex c-gap-1'>
                        <div className='store-img'>
                            <img src={Appstore} />
                        </div>
                        <div className='store-img'>
                            <img src={Playstore} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-links'>
                <div className='footer-links-ul flex c-gap-1'>
                    <div>
                        <h3>Products</h3>
                        <ul>
                            <li><a href='#'>Benefits</a></li>
                            <li><a href='#'>API</a></li>
                            <li><a href='#'>Affiliate Program</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Information</h3>
                        <ul>
                            <li><a href='#'>Payment & Content</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Compare</a></li>
                            <li><a href='#'>TrustPilot</a></li>
                            <li><a href='#'>Reviews</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Legal</h3>
                        <ul>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Account & Payment</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <ul>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>Instructions</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Video</a></li>
                            <li><a href='#'>Help Center</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-newsletter'>
                    <div className=''>
                        <h3>Our Newsletter</h3>
                        <p>Subscribe to our newsletter to receive our latest news and special offers.</p>
                    </div>
                    <div className='newsletter-form'>
                        <form className='flex c-gap-1 '>
                            <input className='w-75 fs-16 fw-400' type='email' placeholder='Enter Your Email' />
                            <input className='w-25 fs-16 subscribe fw-700' type='submit' value='Subscribe' />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer