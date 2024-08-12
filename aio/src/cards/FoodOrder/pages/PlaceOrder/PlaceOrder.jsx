// import React, { useContext } from 'react'
// import './order.css'
// import { StoreContext } from '../../Context/StoreContext'

// const PlaceOrder = () => {

//   const {getTotalCartAmount} = useContext(StoreContext);

//   return (
//     <form className='place-order lg:flex items-start justify-between gap-[50px] mt-[100px]'>
//         <div className="order-left w-full max-w-[max(30%,500px)]">
//             <p className='title text-[30px] font-[600] mb-[50px]'>Delivery Information</p>
//             <div className="multi-fields">
//               <input type="text" placeholder='First Name'/>
//               <input type="text" placeholder='Last Name'/>
//             </div>
//             <input type="email" placeholder='Email address'/>
//             <input type="text" placeholder='street'/>
//             <div className="multi-fields">
//               <input type="text" placeholder='city'/>
//               <input type="text" placeholder='state'/>
//             </div>
//             <div className="multi-fields">
//               <input type="text" placeholder='zip code'/>
//               <input type="text" placeholder='Country'/>
//             </div>
//             <input type="text" placeholder='Phone'/>
//         </div>
//         <div className="order-right w-full max-w-[40%,500px]">
//         <div className="cart-total mt-[20px] flex-1 flex flex-col gap-5">
//           <h2>Cart Totals</h2>
//           <div>
//           <div className="cart-details">
//                 <p>Subtotal</p>
//                 <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-details">
//                 <p>Delivery Fee</p>
//                 <p>${getTotalCartAmount()===0?0:2}</p>
//             </div>
//             <hr />
//             <div className="cart-details">
//                 <p>Total</p>
//                 <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
//             </div>
//           </div>
//             <button className='mt-[30px]' onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
//         </div>
//         </div>
//     </form>
//   )
// }

// export default PlaceOrder
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './order.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate(); // Initialize navigate

  return (
    <form className='place-order lg:flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className="order-left w-full max-w-[max(30%,500px)]">
        <p className='title text-[30px] font-[600] mb-[50px]'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='street'/>
        <div className="multi-fields">
          <input type="text" placeholder='city'/>
          <input type="text" placeholder='state'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="order-right w-full max-w-[40%,500px]">
        <div className="cart-total mt-[20px] flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button
            className='mt-[30px]'
            type='button' // Ensure the button does not submit the form
            onClick={() => navigate('/order')} // Use navigate function
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
