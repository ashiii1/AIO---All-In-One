import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { PiWechatLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-links">
            <div className="footer-icons">
                <Link to="https://wa.me/6009766073" className='footer-link'>
                    <span>Contact via WhatsApp </span>
                    <FaWhatsapp className='footer-icon whatsapp-icon'/>
                </Link>
                <Link to="tel:+916009766073" className='footer-link'>
                    <span>Call Us </span>
                    <TbPhoneCall className='footer-icon call-icon'/>
                </Link>
            </div>

            <div className="footer-icons">
                <Link to="mailto:lawmsangivarte22@gmail.com" className='footer-link'>
                    <span>Send Us an Email </span>
                    <CgMail className='footer-icon email-icon'/>
                </Link>
                <Link to="https://chat.whatsapp.com/I4zKTJVIXAq9AypaTxhjmk" className='footer-link'>
                    <span>Join Our Community </span>
                    <PiWechatLogoBold className='footer-icon whatsapp-icon'/>
                </Link>
            </div>
        </div>
    
        <p className="rights-reserved">All rights reserved &copy; {new Date().getFullYear()} Umbreon Books</p>
    </div>
  )
}

export default Footer