import React from 'react'
import '../styles/Checkout.css'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartsSlice';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store)=>store.cart)

  return (
    <div className='checkout'>
        <div className="checkout-left">
          <div className="checkout-line">
            <p className='line'>My Shopping Cart</p>
          </div>
          {/* Check if the cart is empty */}
          <div className="checkout-details">
            <h3>({cart.length}) Items from Umbreon Books</h3>
            {cart.length === 0 ? (
              <>
              <p>Your cart is empty</p>
              <Link to={`/books/categories`}>
                    <button className='checkout-details-btn'>Continue Shopping</button>
                </Link>
              </>
            ) : (
              // If not empty, map through the cart items and render each CheckoutProduct component
              cart.map((item,index) => (
                <CheckoutProduct
                  key={index}
                  index={index} // Make sure to pass the index prop here
                  title={item.title}
                  author={item.author}
                  image={item.img}
                  price={item.ourPrice}
                  mrp={item.mrp}
                />
              ))
            )}
          </div>
        </div>

        <div className="checkout-right">
          <>
            <h2>Order Summary</h2>
            <p><span>Subtotal ({cart.length} items)</span> <span>{}</span></p>
            <span className=''></span>
            <p><span>Order Total:</span> <span>₹{getCartTotal(cart).toFixed(2)}</span></p>
          </>
          <button 
            className='buy-btn'
            onClick={e =>navigate('/books/payment')}
          >
            Checkout
          </button>
        </div>
    </div>
  )
}

export default Checkout