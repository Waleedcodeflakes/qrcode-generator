import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='bg-container'>
            <h1 className='fw-700'>Create & Customize<br/>
            Your Dynamic QR code for <span className='color'>FREE</span></h1>
            <p>Easily generate, manage and statistically track your QR codes</p>
            <div className='qr-links-section flex c-gap-1 w-85 m-auto'>
                <div className='qr-links w-50'>
                <Link to='/qr-code-generator'>
                    <div className='url-link flex'>
                        <div className='url-link-content flex w-100 justify-b'>
                            <div className='flex c-gap-1'>
                                <i className="fa-solid fa-link"></i>
                                <h3 className='fw-400 fs-20'>URL / Link</h3>
                            </div>
                            <div className='flex c-gap-1'>
                                <div className='question-mark'><p>?</p></div>
                                <div className='question-details'>
                                    <p>Pate link to video, website, playlist etc. QR code will redirect right to your link.</p>
                                </div>
                                <div className='arrow-right'><i className="fa-solid fa-arrow-right-long"></i></div>
                            </div>
                            
                        </div>
                    </div>
                </Link>
                </div>
                <div className='qr-links'>
                <Link to='/qr-code-generator'>
                    <div className='url-link flex'>
                        <div className='url-link-content flex w-100 c-gap-1 justify-b'>
                            <div className='flex'>
                                <i className="fa-solid fa-list-ul"></i>
                                <h3 className='list-links fw-400 fs-20'>List of Links</h3>
                            </div>
                            <div className='flex c-gap-1'>
                                <div className='question-mark'><p>?</p></div>
                                <div className='arrow-right'><i className="fa-solid fa-arrow-right-long"></i></div>
                            </div>
                            
                        </div>
                    </div>
                    </Link>
                </div>
                <div className='qr-links'>
                <Link to='/qr-code-generator'>
                    <div className='url-link flex'>
                        <div className='url-link-content flex w-100 justify-b'>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </Link>
                </div>
                <div className='qr-links'>
                <Link to='/qr-code-generator'>
                    <div className='url-link flex'>
                        <div className='url-link-content flex w-100 c-gap-1 justify-b'>
                            <div className='flex c-gap-1'>
                                <i className="fa-solid fa-bars-staggered"></i>
                                <h3 className='fw-400 fs-20'>Text</h3>
                            </div>
                            <div className='flex c-gap-1'>
                                <div className='arrow-right'><i className="fa-solid fa-arrow-right-long"></i></div>
                            </div>
                            
                        </div>
                    </div>
                </Link>
                </div>
            </div>
            <div className='view-more'>
                <button><a href='#viewmore'>View More types</a></button>
            </div>
        </div>

        {/* <i class="fa-brands fa-youtube"></i> */}
        {/* <i class="fa-solid fa-arrow-right-long"></i> */}
        {/* <i class="fa-solid fa-location-dot"></i> */}
        {/* <i class="fa-solid fa-bars-staggered"></i> */}
        {/* <i class="fa-solid fa-list-ul"></i> */}
    </div>
  )
}

export default Hero