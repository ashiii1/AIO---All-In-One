import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import '../styles/Payment.css'
import useRazorpay from "react-razorpay";
import { getCartTotal } from '../redux/cartsSlice'
import LogoIcon from '../assets/umbreon_books.png'
import AddressField from './AddressField'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Payment = ({ index, title, image,mrp, price,author }) => {
  const { cart } = useSelector((store)=>store.cart)
  const [Razorpay] = useRazorpay();

  const subtotal = getCartTotal(cart);
  const shippingFee = subtotal < 999 ? 40 : 0;
  const cashOnDeliveryFee = 50;
  const orderTotal = subtotal + shippingFee + cashOnDeliveryFee;
  
  const handlePayment = async () => {
//   const order = await createOrder(params); //  Create order on your backend
    const totalAmount = getCartTotal(cart)
  const options = {
    key: "rzp_test_DJ0wezYx3QyIiu", // Enter the Key ID generated from the Dashboard
    amount: totalAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Umbreon Books",
    description: "Test Transaction",
    image: LogoIcon,
    // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
    // handler: function (response) {
    //   alert(response.razorpay_payment_id);
    //   alert(response.razorpay_order_id);
    //   alert(response.razorpay_signature);
    // },
    prefill: {
      name: "Lawmsangi Varte",
      email: "lawmsangivarte22@gmail.com",
      contact: "6009766073",
    },
    notes: {
      address: "Zuangtui, Aizawl",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new Razorpay(options);
  rzp1.open();
};


  return (
    <div className='payment'>
      <h1>Checkout(<Link to='/checkout'>{cart?.length}items</Link>)</h1>
        
        <div className="payments-wrapper">
          <div className="payment__section-left">
            <div className="payment__title">
              <h3>Delivery address</h3>      
            </div>
            <div className="payment__address">
              <div className="address-wrapper">
                <AddressField />    
              </div>
            </div>

          </div>


          <div className="payment__section-right">
            <div className="payment__title">
              <h3>ITEMS SUMMARY({cart?.length} item)</h3>      
            </div>

            <div className="item__summary">
              {cart.map((item,index)=> {
                return (
                <div className="summary-product" key={index}>
                  <img className='summary-product__image' src={item.img} alt={item.title} />
                    <div className="summary-product__info">
                      <p className="checkout-product__title">{item.title}</p>
                      <p className="checkout-product__title"> by {item.author}</p>
                      <p><span className='strike'>₹{item.mrp}</span><span className='our-price'> ₹{item.ourPrice}</span></p>
                    </div>
                </div>
                )
              })}
            </div>
                
            <div className='summary-total'>
              <p className='summary-total-items'><span>Subtotal</span> <span>₹ {subtotal.toFixed(2)}</span></p>
              <p className='summary-total-items'><span>Estimated Shipping</span> <span>₹ {shippingFee}</span></p>
              <p className='summary-total-items'><span>Cash on Delivery</span> <span>₹ {cashOnDeliveryFee}</span></p>
              <p className='summary-total-items underline'><span>Order Total</span> <span>₹ {orderTotal.toFixed(2)}</span></p>
            </div>
            <div className="payment__details">
              <Stack spacing={2} direction="row">
                <Button onClick={handlePayment} variant="contained">Submit Order</Button>
            </Stack>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default Payment