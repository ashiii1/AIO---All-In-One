import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer mt-14 text-[#d9d9d9] bg-[#323232] lg:flex lg:flex-col items-center gap-5 px-[8vw] pt-[20px]' id='footer'>
        <div className='w-full lg:grid lg:grid-cols-[2fr.1fr.1fr] gap-[80px] '>
            <div className='left lg:w-[80%]  lg:flex lg:flex-col lg:items-start gap-5'>
                <img src={assets.logo} alt="" />
                <p className='lg:16px md:16px sm:12px'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quibusdam quaerat ducimus error reiciendis odio velit minima, vel modi minus. Nihil omnis ut inventore reiciendis quisquam cumque exercitationem modi voluptate.</p>
                <div className='icons flex my-3'>
                    <img className='lg:w-[40] sm:w-[30px] mr-[15px]' src={assets.facebook_icon} alt="" />
                    <img className='lg:w-[40] sm:w-[30px] mr-[15px]' src={assets.twitter_icon} alt="" />
                    <img className='lg:w-[40] sm:w-[30px] mr-[15px]' src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='center flex flex-col items-start gap-5'>
                <h2 className='text-xl font-[500] text-white'>COMPANY</h2>
                <ul className='cursor-pointer'>
                    <li className='mb-[10px]'>Home</li>
                    <li className='mb-[10px]'>ABout</li>
                    <li className='mb-[10px]'>Delivery</li>
                    <li className='mb-[10px]'>Privay policy</li>
                </ul>
            </div>
            <div className='right lg:flex lg:flex-col lg:items-start sm:items-center lg:gap-5 sm:gap-2'>
                <h2 className='text-xl my-2 font-[500] text-white'>GET IN TOUCH</h2>
                <ul className='cursor-pointer'>
                    <li className='mb-[10px]'>+1-212-456-789</li>
                    <li className='mb-[10px]'>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className='lg:w-full h-[2px] my-[20px] mx-0 bg-gray-50 border-none'/>
        <p className='lg:text-[17px] text-center sm:text-[14px] mb-5'>
            copyright 2024 &copy; SK ASHI - All Right Reserved
        </p>
    </div>
  )
}

export default Footer