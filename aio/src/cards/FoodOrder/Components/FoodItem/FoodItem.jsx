// // import React, { useContext } from 'react'
// // import './fooditem.css'
// // import { assets } from '../../assets/assets'
// // import { StoreContext } from '../../Context/StoreContext';

// // const FoodItem = ({id,name,price,description,image}) => {

    
// //     const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);

// //   return (
// //     <div className='food-item w-full m-auto rounded-[15px] shadow-lg transition-[.4s] animate-[fadeIn.3s]'>
// //         <div className="food-image-container relative">
// //             <img className='food-image w-full rounded-t-[15px]' src={image} alt="" />
// //             {
// //                 !cartItem[id] 
// //                 ? <img className='add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> :
// //                  <div className='food-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
// //                     <img width={30} onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
// //                     <p>{cartItem[id]}</p>
// //                     <img width={30} onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
// //                  </div>
// //             }
// //         </div>
// //         <div className="food-info p-[30px]">
// //             <div className="name-rating flex justify-between items-center mb-[10px]">
// //                 <p className='text-xl font-[500]'>{name}</p>
// //                 <img className='w-[70px]' src={assets.rating_starts} alt="" />
// //             </div>
// //             <p className="food-desc text-[#676767] text-[12px]">{description}</p>
// //             <p className="food-price text-[tomato] text-[22px] font-[500] m-[10px.0px]">${price}</p>
// //         </div>
// //     </div>
// //   )
// // }

// // export default FoodItem

// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './fooditem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/food-order/food-order/${id}`);
//   };

//   return (
//     <div
//       className='food-item w-full m-auto rounded-[15px] shadow-lg transition-[.4s] animate-[fadeIn.3s] cursor-pointer'
//       onClick={handleCardClick}
//     >
//       <div className="food-image-container relative">
//         <img className='food-image w-full rounded-t-[15px]' src={image} alt="" />
//         {
//           !cartItem[id] ? (
//             <img 
//               className='add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' 
//               onClick={(e) => { e.stopPropagation(); addToCart(id); }} 
//               src={assets.add_icon_white} 
//               alt="Add to Cart" 
//               title="Add to Cart"
//             />
//           ) : (
//             <div className='food-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
//               <img width={30} onClick={(e) => { e.stopPropagation(); removeFromCart(id); }} src={assets.remove_icon_red} alt="Remove" />
//               <p>{cartItem[id]}</p>
//               <img width={30} onClick={(e) => { e.stopPropagation(); addToCart(id); }} src={assets.add_icon_green} alt="Add" />
//             </div>
//           )
//         }
//       </div>
//       <div className="food-info p-[30px]">
//         <div className="name-rating flex justify-between items-center mb-[10px]">
//           <p className='text-xl font-[500]'>{name}</p>
//           <img className='w-[70px]' src={assets.rating_starts} alt="Rating" />
//         </div>
//         <p className="food-desc text-[#676767] text-[12px]">{description}</p>
//         <p className="food-price text-[tomato] text-[22px] font-[500] m-[10px.0px]">${price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './fooditem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/food-order/food-order/${id}`);
  };

  const handleShowDetailsClick = (e) => {
    e.stopPropagation(); // Prevents triggering handleCardClick
    navigate(`/food-order/food-order/${id}`); // Redirect to cardDetails page
  };

  return (
    <div
      className='food-item w-full m-auto rounded-[15px] shadow-lg transition-[.4s] animate-[fadeIn.3s] cursor-pointer'
      onClick={handleCardClick}
    >
      <div className="food-image-container relative">
        <img className='food-image w-full rounded-t-[15px]' src={image} alt={name} />
        <div className='absolute top-[15px] right-[15px]'>
          <img 
            className='add w-[35px] cursor-pointer rounded-[50%]' 
            onClick={(e) => { e.stopPropagation(); addToCart(id); }} 
            src={assets.add_icon_white} 
            alt="Add to Cart" 
            title="Add to Cart"
          />
        </div>
        {
          cartItem[id] ? (
            <div className='food-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
              <img width={30} onClick={(e) => { e.stopPropagation(); removeFromCart(id); }} src={assets.remove_icon_red} alt="Remove" />
              <p>{cartItem[id]}</p>
              <img width={30} onClick={(e) => { e.stopPropagation(); addToCart(id); }} src={assets.add_icon_green} alt="Add" />
            </div>
          ) : null
        }
        <button 
          className='show-details-btn absolute bottom-[15px] left-[15px] bg-orange-500 text-white rounded-full px-3 py-1'
          onClick={handleShowDetailsClick}
        >
          Show Details
        </button>
      </div>
      <div className="food-info p-[30px]">
        <div className="name-rating flex justify-between items-center mb-[10px]">
          <p className='text-xl font-[500]'>{name}</p>
          <img className='w-[70px]' src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-desc text-[#676767] text-[12px]">{description}</p>
        <p className="food-price text-[tomato] text-[22px] font-[500] m-[10px.0px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
