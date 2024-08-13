import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-section'>
          <h4 className='footer-subheading'>NaariCare</h4>
          <p className='footer-text'> About Us</p>
          <p className='footer-text'> Our Team</p>
          <p className='footer-text'> Careers</p>
          <p className='footer-text'> Press</p>
          <p className='footer-text'> Sitemap</p>
        </div>
        <div className='footer-section'>
          <h4 className='footer-subheading'>NaariCare Business</h4>
          <p className='footer-text'> Sell on NaariCare</p>
        </div>
        <div className='footer-section'>
          <h4 className='footer-subheading'>Policy Info</h4>
          <p className='footer-text'> Privacy Policy</p>
          <p className='footer-text'> Terms of use</p>
          <p className='footer-text'> Return Policy</p>
          <p className='footer-text'> Press</p>
        </div>
        <div className='footer-section'>
          <h4 className='footer-subheading'>Need help?</h4>
          <p className='footer-text'> FAQ</p>
          <p className='footer-text'> Contact Us</p>
        </div>
      </div>
      <div className='footer-container-sm'>
        <h4 className='footer-subheading'>NaariCare</h4>
        <p className='footer-text'> Contact Us +91 9675479089</p>
      </div>
    </>
  )
}

export { Footer }