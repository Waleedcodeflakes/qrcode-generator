import React from 'react'
import './navbar.css'
import logo from '../assets/images/qr-logo.png'
import arrowDown from '../assets/images/chevron-down-white.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='p-fix w-100'>
      <div className='navbar w-85 m-auto flex justify-b'>
          <div className='logo'>
              <img src={logo} />
          </div>
          <div className='nav-links fs-16'>
              <ul className='flex'>
                <div className='dropdown'>
                  <li className='dropdown'><a href='#'>Why Me-QR?</a><i className="fa-solid fa-chevron-down"></i></li>
                  <div className='dropdown-content'>
                    <ul>
                      <li>Knowledge Base</li>
                      <li><a href='#'>Blog</a></li>
                      <li><a href='#'>Instructions</a></li>
                      <li><a href='#'>Cases</a></li>
                      <li><a href='#'>Features</a></li>
                      <li><a href='#'>Video</a></li>
                    </ul>
                  </div>

                </div>
                  <li><Link to='/qr-code-generator'>Generate QR</Link></li>
                  <li><a href='#'>Contact Us</a></li>
                  <li><a href='#'>Support</a></li>
                  <li><a href='#'>FAQ</a></li>
                  <div className='flex'>
                  <li className='create-qr btn'><a href='#'>Create QR code</a></li><img className='arrow-down' src={arrowDown} />
                  </div>
                  <li className='login btn'><a href='#'>Login</a></li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar