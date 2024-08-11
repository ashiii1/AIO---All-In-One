import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { PiWechatLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footerb'>
        <div className="footerb-links">
            <div className="footerb-icons">
                <Link to="https://wa.me/6009766073" className='footerb-link'>
                    <span>Contact via WhatsApp </span>
                    <FaWhatsapp className='footer-icon whatsapp-icon'/>
                </Link>
                <Link to="tel:+916009766073" className='footerb-link'>
                    <span>Call Us </span>
                    <TbPhoneCall className='footerb-icon call-icon'/>
                </Link>
            </div>

            <div className="footerb-icons">
                <Link to="mailto:lawmsangivarte22@gmail.com" className='footer-link'>
                    <span>Send Us an Email </span>
                    <CgMail className='footerb-icon email-icon'/>
                </Link>
                <Link to="https://chat.whatsapp.com/I4zKTJVIXAq9AypaTxhjmk" className='footer-link'>
                    <span>Join Our Community </span>
                    <PiWechatLogoBold className='footerb-icon whatsapp-icon'/>
                </Link>
            </div>
        </div>
    
        <p className="rights-reserved">All rights reserved &copy; {new Date().getFullYear()} Umbreon Books</p>
    </div>
  )
}

export default Footer