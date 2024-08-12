import React, { useContext } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

    
    const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item w-full m-auto rounded-[15px] shadow-lg transition-[.4s] animate-[fadeIn.3s]'>
        <div className="food-image-container relative">
            <img className='food-image w-full rounded-t-[15px]' src={image} alt="" />
            {
                !cartItem[id] 
                ? <img className='add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> :
                 <div className='food-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                    <img width={30} onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItem[id]}</p>
                    <img width={30} onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                 </div>
            }
        </div>
        <div className="food-info p-[30px]">
            <div className="name-rating flex justify-between items-center mb-[10px]">
                <p className='text-xl font-[500]'>{name}</p>
                <img className='w-[70px]' src={assets.rating_starts} alt="" />
            </div>
            <p className="food-desc text-[#676767] text-[12px]">{description}</p>
            <p className="food-price text-[tomato] text-[22px] font-[500] m-[10px.0px]">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem