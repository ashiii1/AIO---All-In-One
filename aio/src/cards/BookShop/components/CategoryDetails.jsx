import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Books from './books.json';
import '../styles/CategoryDetails.css';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import { addToWishlist } from '../redux/cartsSlice';
import { useDispatch, useSelector } from 'react-redux';

function CategoryDetails() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [alertBooks, setAlertBooks] = useState([]); 
  const booksPerPage = 10;

  const filteredBooks = Books.books.filter(book => book.categories.includes(category));
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedBooks = filteredBooks.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const { wishlist } = useSelector((store)=>store.cart) 

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
    <div className='categoryDetails'>
      <h1>{category}({filteredBooks.length})</h1>
      <span>{`Page ${currentPage}`}</span>
      <div className='details-container'>
        {displayedBooks.map((book, index) => (
          <div className='details-content' key={book.title}>
            <Link to={`/books/categories/categories/${book.title}`}>
              <div className="details-img">
                <img src={book.img} alt={book.title} />
              </div>
            </Link>
            <div className="wishlistIcon-container">
              <button
                className={`wishlist-icon ${wishlist.some(item => item.title === book.title) ? 'in-wishlist' : ''}`}
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
            <div className="details-name">
              <h4>{book.title} by {book.author}</h4>
              <p><span className='strike'>₹{book.mrp}</span><span className='our-price'> ₹{book.ourPrice}</span></p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(filteredBooks.length / booksPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        previousLabel={<FaChevronLeft />}
        nextLabel={<FaChevronRight />}
      />
    </div>
  );
}

export default CategoryDetails;