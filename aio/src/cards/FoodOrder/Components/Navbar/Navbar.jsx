import React, { useContext, useState } from 'react'
import './nav.css'
import { assets } from './../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState('home');
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbarf'>
      <Link to='/'> <img src={assets.logo} alt="" className="logo md:w-[140px]" /></Link>
      <ul className="navbarf-menu lg:flex md:flex lg:text-[18px] md:text-[14px] sm:hidden">
       <Link to='/' onClick={()=> setMenu("home")} className={menu==="home"?"active" : ""}>home </Link>
        <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu==="menu" ? "active":""}>menu</a>
        <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app" ?"active" : ""}>mobile-app</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu==="contact-us" ?"active" : ""}>contact us</a>
      </ul>
      <div className="navf-right">
        <img src={assets.search_icon} alt="" />
        <div className="navf-search-icon">
         <Link to='/cart'> <img className='lg:w-[22px] md:w-[22px] ' src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar