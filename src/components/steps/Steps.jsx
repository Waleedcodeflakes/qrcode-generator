import React from 'react'
import './steps.css'
import Step1 from '../assets/images/step-1.png'
import Step2 from '../assets/images/step-2.png'
import Step3 from '../assets/images/step-3.png'
import StepMedia from '../assets/images/art-qr-start.png'
import { Link } from 'react-router-dom'

const Steps = () => {
  return (
    <div className='steps m-auto'>
        <h2 className='fw-700'>Create QR Code in 3 Steps</h2>
        <div className='steps-container w-85 flex m-auto c-gap-1'>
            <div className='steps-card w-33'>
                <div className='steps-media'>
                    <img src={Step1} alt='Step-1'/>
                </div>
                <div className='steps-no'>
                    <p>Step 1</p>
                </div>
                <div className='steps-heading'>
                    <h3>Choose the type</h3>
                </div>
            </div>
            <div className='steps-card w-33'>
                <div className='steps-media'>
                    <img src={Step2} alt='Step-2'/>
                </div>
                <div className='steps-no'>
                    <p>Step 2</p>
                </div>
                <div className='steps-heading'>
                    <h3>generate QR code</h3>
                </div>
            </div>
            <div className='steps-card w-33'>
                <div className='steps-media'>
                    <img src={Step3} alt='Step-2'/>
                </div>
                <div className='steps-no'>
                    <p>Step 3</p>
                </div>
                <div className='steps-heading'>
                    <h3>customize & download</h3>
                </div>
            </div>
        </div>
        <div className='try-now w-85 flex m-auto'>
            <div className='w-50'>
                <h2>✨ Create QR — Previously<br/> $100, Now Completely Free!</h2>
                <p>Turn your info into a QR code with a unique dot pattern.<br/> Smart, stylish, and instantly recognizable.</p>
                <button><Link to='/qr-code-generator'>Try Now</Link></button>
            </div>
            <div className='w-50' style={{ justifyContent : 'center'}}>
                <img src={StepMedia} />
            </div>
        </div>
    </div>
  )
}

export default Steps