import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../styles/WishList.css';
import { removeFromWishlist } from '../redux/cartsSlice';
import { Link } from 'react-router-dom';
import sadIcon from '../assets/sadbook-icon.jpg'

const WishList = () => {
    const dispatch = useDispatch();
    const { wishlist } = useSelector((store)=>store.cart)   

  return (
    <div className='wishlist-container'>
        <h2>Your collections</h2>
        <div className="wishlist-content">
        {/* Check if the wishlist is empty */}
        {wishlist.length === 0 ? (
            <div className='wishlist-empty'>
                <img src={sadIcon} alt="sadIcon"/>
                <p>No items in the wishlist</p>
                <Link to={`/books/categories`}>
                    <button>Continue Shopping</button>
                </Link>
            </div>
        ) : (
            // If not empty, map through the wishlist items and render each book
            wishlist.map((item,index) => (
                <div 
                    key={index}
                    className='wishlist-item'
                >
                    {/* <p>{item.title}</p>
                    <p>{item.author}</p> */}
                    <Link to={`/books/categories/${item.title}`}>
                        <img 
                            src={item.img} 
                            alt={item.title}
                            className='wishlist-img'
                        />
                    </Link>
                    <button 
                        onClick={() => dispatch(removeFromWishlist(index))}
                    >
                        Remove
                    </button>
                </div>
            ))
        )}
        </div>
    </div>
  )
}

export default WishList