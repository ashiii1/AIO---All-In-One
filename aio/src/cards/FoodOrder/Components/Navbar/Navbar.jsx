import React, { useContext, useState } from 'react'
import './nav.css'
import { assets } from './../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import cartimg from '../../assets/basket.jpg'
const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState('home');
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='p-0  bg-orange-900 h-24'>
    <div className='navbarf'>
      <div className=''>
      <Link to='/food-order'> <img src={""} alt="" className=" w-20 top-0 pb-2 pl-24 h-30" /></Link>
    </div>
      <ul className="flex flex-row text-white gap-14 lg:flex md:flex lg:text-[18px] md:text-[14px] sm:hidden">
       <Link to='/food-order' onClick={()=> setMenu("home")} className={menu==="home"?"active" : ""}>home </Link>
        <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu==="menu" ? "active":""}>menu</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu==="contact-us" ?"active" : ""}>contact us</a>
      </ul>
      
      <div className="navf-right ">
        <img src={assets.search_icon} alt="" />
        <div className="navf-search text-white">
         <Link to='/food-order/cart'> <img className='lg:w-[32px] md:w-[32px] ' src={cartimg} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button className='text-white bg-orange-950' onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar