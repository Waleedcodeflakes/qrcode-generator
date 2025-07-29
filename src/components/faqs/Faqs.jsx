import React, {useState} from 'react'
import './faqs.css'
import faqMedia from '../assets/images/faq img.png';

const Faqs = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqsData = [
        {
            question: 'Is QR code free?',
            answer: 'Service absolutely free, but after a scan, we will show advertisements (Google Ads). To remove advertisements and get more statistics, you can buy our premium account. You can see our prices on the Pricing page.'
        },
        {
            question: 'When will QR expire?',
            answer: 'In free and premium versions QR codes have no expiration time'
        },
        {
            question: 'How can I create QR code for the restaurant manu?',
            answer: 'We have a digital menu constructor. You can create a QR for the menu here. All you need is a PDF file with your menu. Then choose an image and social buttons, upload the menu and generate a QR code'
        },
        {
            question: 'Could I change the link in my created QR witout registration?',
            answer: 'If you want to change the link in your QR you need to sign up on our site'
        },
    ];

    const toggleAnswer = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }

  return (
    <div className='faqs w-100'>
        <div className='w-85 m-auto'>
            <h2 className='fw-700 fs-40'>Frequently Asked Questions</h2>
            <div className='faq-flex c-gap-1'>
                <div className='faqs-content w-70'>
                    {faqsData.map((faq, index) => (
                    <div className='faqs-questions'>
                        <div key={index} className='faq-item'>
                            <div className='faq-question flex justify-b'>
                                <h3>{faq.question}</h3>
                                <i className={`fa-solid fa-chevron-${activeIndex === index ? 'up' : 'down'}`} onClick={() => toggleAnswer(index)}></i>
                            </div>
                            {activeIndex === index && (
                                <div className='faq-ans'>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div> 
                    </div>
                        ))}
                    <div className='show-all a-left'>
                        <button><a href='#' className='fs-16 fw-700'>Show All</a></button>
                    </div>
                </div>
                <div className='faqs-media w-30'>
                    <img src={faqMedia} />
                </div>
        
            </div>
        </div>
    </div>
  )
}

export default Faqs