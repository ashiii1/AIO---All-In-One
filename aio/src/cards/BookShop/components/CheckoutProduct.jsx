import React from 'react';
import { removeFromCart } from '../redux/cartsSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/CheckoutProduct.css'
import { Link } from 'react-router-dom';
// import QuantityDropdown from './QuantityDropdown';

const CheckoutProduct = ({ index, title, image,mrp, price,author }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((store)=>store.cart)

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(index));
  };
  return (
    <div className="checkout-product">
      <Link to={`/books/categories/${title}`}>
        <img className="checkout-product__image" src={image} alt={title} />
      </Link>
        <div className="checkout-product__info">
          <p className="checkout-product__title">{title}</p>
          <p className="checkout-product__title">by {author}</p>
          <p><span className='strike'>₹{mrp}</span><span className='our-price'> ₹{price}</span></p>
          {/* <QuantityDropdown 
           item={item}
          /> */}
          <button 
            className='remove-btn'
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        </div>
    </div>
  );
}

export default CheckoutProduct;
