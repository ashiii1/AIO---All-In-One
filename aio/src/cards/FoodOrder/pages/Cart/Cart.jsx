import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "./../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart mt-[100px] ">
      <div className="cart-items ">
        <div className="cart-items-title ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item ">
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cross text-[20px] text-[red] cursor-pointer">x</p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none"/>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[18px] flex justify-center lg:gap-[max(12vw,20px)]">
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
                <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-details">
                <p>Total</p>
                <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode flex-[1]">
          <div>
            <p className="color-[#555]">If you have a promo code, Enter it here</p>
            <div className="promo-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
                <input className="bg-transparent border-none outline-none pl-[10px]" type="text" placeholder="promo code"/>
                <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
