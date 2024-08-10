import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Books from './books.json';
import '../styles/BooksDetails.css';
import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist } from '../redux/cartsSlice';
import { FaHeart } from 'react-icons/fa';

function BookDetails() {
  const { title } = useParams();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((store)=>store.cart) 
  const [alertBooks, setAlertBooks] = useState([]); 

  const filteredBooks = Books.books.filter(book => book.title.includes(title));

  if (filteredBooks.length === 0) {
    return <div>No books found for the title: {title}</div>;
  }

  const handleAddToWishlist = (book) => {
    dispatch(addToWishlist(book));
    const isBookInWishlist = wishlist.some(item => item.title === book.title);
    if (!isBookInWishlist) {
        setAlertBooks(prevAlertBooks => [...prevAlertBooks, { book, type: 'added' }]);
    } else {
        setAlertBooks(prevAlertBooks => [...prevAlertBooks, { book, type: 'alreadyInWishlist' }]);
    }
     setTimeout(() => {
        setAlertBooks(prevAlertBooks => prevAlertBooks.filter(item => item.book !== book));
    }, 3000);
  };

  return (
    <div>
      {filteredBooks.map(book => (
        <div key={book.title} className='books-details'>
          <div className='books-image'>
            <img src={book.img} alt={book.title} />
            <div className="details-wishlist-container">
              <button
                className={`details-wishlist-icon ${wishlist.some(item => item.title === book.title) ? 'in-wishlist' : ''}`}
                onClick={() => handleAddToWishlist(book)}
              >
                <FaHeart />
              </button>
            </div>
            {alertBooks.some(item => item.book === book && item.type === 'added') && (
              <div className="wishlist-alert" >
                {`Added "${book.title}" to wishlist!`}
              </div>
            )}
            {alertBooks.some(item => item.book === book && item.type === 'alreadyInWishlist') && (
              <div className="wishlist-alert" >
                {`"${book.title}" is already in the wishlist!`}
              </div>
            )}
          </div>
          
          <div className='book-details' >
            <h3>{book.title} by {book.author}</h3>
            <div className="price-rating">
              <p><span className='strike'>₹{book.mrp}</span><span className='our-price'> ₹{book.ourPrice}</span></p>
              <p className='ratings'><Rating rating={book.ratings} /> {book.ratings}</p>
            </div>
            <button 
                className='cart-btn'
                type='button'
                onClick={()=> dispatch(addToCart(book))}>
                  Add to Cart
              </button>
            <p className='genres'>Genres: {book.categories.join(', ')}</p>
            <p>{book.pages} pages</p>
            <p>{book.published}</p>
            <p>{book.description}</p>
            
            <p style={{ textDecoration: 'underline' }}><a href={book.reviews}>Read Reviews From Goodreads</a></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
