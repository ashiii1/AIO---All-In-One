import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup absolute z-[1] w-full h-full bg-[#00000090] grid' id='login'>
        <form className='place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-[fadeIn 0.5s]'>
            <div className='flex justify-between items-center text-black'>
                <h2 className='text-lg font-[500]'>{currState}</h2>
                <img className='w-[16px] cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                {currState==="Login"? <></> : <input className='outline-none border border-solid p-[10px] rounded-[4px] border-[#c9c9c9]' type="text" placeholder='Your Name' required/>}
                
                <input className='outline-none border border-solid p-[10px] rounded-[4px] border-[#c9c9c9]' type="email" placeholder='Your Email' required/>
                <input className='outline-none border border-solid p-[10px] rounded-[4px] border-[#c9c9c9]' type="password" placeholder='Password' required/>
            </div>
            <button className='px-2 py-1 border-none p-[10px] rounded-[4px] text-white bg-[tomato] text-[15px] cursor-pointer'>{currState==="Sign Up" ? "Create Account" : "Login"} </button>
            <div className='flex items-start gap-2 mt-[-15px]'>
                <input className='mt-[5px] outline-none border border-solid p-[10px] rounded-[4px] border-[#c9c9c9]' type="checkbox" required />
                <p>By continuing , i agree the terms of use & privacy policy</p>
            </div>
            {currState==="Login" 
            ? <p>Create a new account? <span className='text-[tomato] font-[500] cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here</span></p> : 
            <p>Already have an account? <span className='text-[tomato] font-[500] cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            
           
        </form>
    </div>
  )
}

export default LoginPopup