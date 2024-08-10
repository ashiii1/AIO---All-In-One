import React from "react";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import CartList from "./CartList";
import { Link } from "react-router-dom";
import "../assets/css/cart.css";
// const cartData=require('../cart.json');
// const fs = require('fs')

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  // const [cartItemQty, setCartItemQty] = useState([]);
  // JSON.parse(localStorage.getItem('cartItemQty')|| []));

  // JSON.parse(localStorage.getItem('cartInfo'))|| []
  const [existingCartData, setExistingCartData] = useState(
    JSON.parse(localStorage.getItem("cartInfo")) || []
  );
  console.log("Carts first call", existingCartData);
  // function checkData()

  const handleIncrease = (item) => {
    item.qty++;
    // console.log("click",item.qty)
  };
  const handleDecrease = (item) => {
    if (item.qty > 0) {
      item.qty--;
      // console.log("click",item.qty)
    }
  };
  const handlePrice = () => {
    let ans = 0;
    let cartItemQty = 0;
    existingCartData.map(
      (item) =>
        // console.log(item),
        (ans += item.qty * item.price)
    );
    // existingCartData.map((item) => (
    //     cartItemQty += item.qty
    // ))
    setPrice(ans);
    // setCartItemQty(cartItemQty);
    // localStorage.setItem('cartItemQty', cartItemQty);
    localStorage.setItem("cartInfo", JSON.stringify(existingCartData));
    console.log(existingCartData);
    // const result= localStorage.getItem('cartInfo');
    console.log(
      "after changes",
      JSON.parse(localStorage.getItem("cartInfo")),
      "items",
      cartItemQty
    );
    // adding in object c.push(g)
  };

  const handleRemove = (cartItem) => {
    // console.log("cartItem",cartItem);

    // finding what is the position of the item that need to be removed

    let obj = existingCartData.find((x) => x.id == cartItem.id);
    let index = existingCartData.indexOf(obj);
    // console.log(index);
    existingCartData.splice(index, 1);
    // console.log(cartData);
    localStorage.setItem("cartInfo", JSON.stringify(existingCartData));
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    // <h1>sdgbnsngfs</h1>

    <article id="cart" className="container flex flex-col items-center bg-slate-50 shadow-xl p-5 mt-[140px] md:mt-[110px]">
      <h2 className="text-3xl text-slate-600 font-bold mb-4">Shopping Bag</h2>
      <hr className="mb-8" />
      {existingCartData?.map((item) => (
        <div className=" cart_box w-[350px] md:w-[70%]" key={item.id}>
          <div className=" cart_img">
            <img src={item.images[0]} />
            <p>{item.title}</p>
          </div>
          <div>
            <button
              onClick={() => {
                // console.log(item);
                handleIncrease(item);
                handlePrice();
              }}
            >
              +
            </button>
            <button>{item.qty}</button>
            <button
              onClick={() => {
                // console.log(item);
                handleDecrease(item);
                handlePrice();
              }}
            >
              -
            </button>
          </div>
          <div>
            <span>£{item.price}</span>
            <button
              onClick={() => {
                handleRemove(item);
                handlePrice();
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-10 w-[70%] total">
        <span>Total: &nbsp; </span>
        <span> £{price}</span>
      </div>
              <Link to="/order-complete"><button className="w-[300px] text-2xl font-bold p-3 m-10 bg-red-500 rounded-lg text-white active:mt-1 active:ml-1">Buy now</button></Link>
          
    </article>
  );
};
// handleClick={handleClick}
export default Cart;
