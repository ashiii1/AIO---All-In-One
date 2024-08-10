import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { BsSearchHeart } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Books from './books.json'; 
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";

function Navbar() {
    const { cart } = useSelector((store)=>store.cart)
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const goBack = () => {
        navigate(-1); // Go back to the previous page
    };

    // Function to handle search input change
    const handleSearchChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchValue(value);

        // Filter books based on the search value
        const filteredBooks = value.trim() !== '' ?
            Books.books.filter(book =>
                book.title.toLowerCase().includes(value) || 
                book.author.toLowerCase().includes(value)
            ) : [];
        setSearchResults(filteredBooks);
    };

    // Function to navigate to book details page
    const navigateToBookDetails = (title) => {
        navigate(`/books/categories/category/${title}`);
        setSearchResults([]);
        setSearchValue('');
    };

     const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        if (category !== '') {
            navigate(`/books/categories/${category}`);
        }
    };
     
    const allCategories = Books.books.flatMap(book => book.categories);
    const uniqueCategories = [...new Set(allCategories)];

    return (
        <div className="navbar">
            <div className="navbar-first">
                <div className="navbar-links">
                    <Link to="https://www.google.com/maps?q=Umbreon+Books,+near+upc+church,+Zuangtui,+Aizawl,+Mizoram+796014&ftid=0x374debac308b7d17:0x967946d1a761b999&hl=en-IN&gl=in&entry=gps&lucs=47062720&g_ep=CAISBjYuNTYuMhgAINeCAyoINDcwNjI3MjBCAklO&g_st=iw">
                        <CiLocationOn />
                    </Link>
                    <Link to="/" className="title">
                        <h5>Umbreon Books</h5>
                    </Link>
                </div>
                <div className="navbar-right">
                    <div className="navbar-links">
                    <div className="dropdown">
                        <select name="categories" id="categories" value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="">Categories</option>
                            {uniqueCategories.map((category, index) => (
                                <option value={category} key={index}>{category}</option>
                            ))} 
                        </select>
                    </div>
                </div>
                <div className="navbar-wishlist">
                    <Link to="/wishlist"
                    className='wishlist'>
                        <FaHeart className='navbar-wishlist-icon'/>
                        <span>Wishlist</span>
                    </Link>
                </div>
                </div>
            </div>

            <div className="navbar-second">
                <div className="navbar-search">
                    <IoArrowBack className='back-icon'onClick={goBack} />
                    <input type="text" placeholder="Search" value={searchValue} onChange={handleSearchChange} />
                    <span className="search-icon"><BsSearchHeart /></span>
                </div>
                <Link to="/checkout">
                    <div className="navbar-cart">
                        <IoCartOutline className='cart-icon' />
                        <span className='count-cart'>{cart.length}</span>
                    </div>
                </Link>
            </div>

            {searchValue.trim() !== '' && (
                <div className="search-results">
                    {searchResults.slice(0, 7).map((book, index) => (
                        <div key={book.title}>
                            <p onClick={() => navigateToBookDetails(book.title)}>
                                {book.title}
                            </p>
                        </div>
                    ))}
                    {searchResults.length > 7 && <p>...</p>}
                </div>
            )}


        </div>
    );
}

export default Navbar;
