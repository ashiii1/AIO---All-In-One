import React, { useState, useEffect } from 'react';
import '../styles/Categories.css';
import { Link } from 'react-router-dom';
import Books from './books.json';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Categories() {
  // Extract all unique categories from the books data
  const allCategories = Books.books.flatMap(book => book.categories);
  const uniqueCategories = [...new Set(allCategories)];
  const totalBooks = Books.books.length;
  // State to keep track of assigned images
  const [assignedImages, setAssignedImages] = useState({});

  // useEffect hook to assign images when the component mounts
  useEffect(() => {
    // Create a set to store used image URLs
    const usedImages = new Set();

    // Loop through categories and assign images
    uniqueCategories.forEach(category => {
      // Filter books with the current category
      const booksWithCategory = Books.books.filter(book => book.categories.includes(category));

      // Filter out books whose images are already used
      const availableBooks = booksWithCategory.filter(book => !usedImages.has(book.img));

      // Select a random book from available books
      const selectedBook = availableBooks[Math.floor(Math.random() * availableBooks.length)];

      // Update assignedImages state with the selected image URL for the category
      setAssignedImages(prevState => ({
        ...prevState,
        [category]: selectedBook ? selectedBook.img : '' // Default to empty string if no book is available
      }));
      
      // Add the selected image URL to the used images set
      if (selectedBook) {
        usedImages.add(selectedBook.img);
      }
    });
  }, []);

  const categoriesPerPage = 10; // Number of categories per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Calculate the index range of categories to display based on the current page
  const startIndex = currentPage * categoriesPerPage;
  const endIndex = startIndex + categoriesPerPage;
  const slicedCategories = uniqueCategories.slice(startIndex, endIndex);

  // Total number of pages
  const pageCount = Math.ceil(uniqueCategories.length / categoriesPerPage);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='categories'>
      <span>{uniqueCategories.length} Categories</span>
      <span>Total Books:{totalBooks}</span>
      <div className="categories-card">
        {slicedCategories.map((category, index) => {
          // Get the image URL associated with the category
          const imageURL = assignedImages[category] || ''; // Default to empty string if image URL is not found
          return (
            <Link to={`/books/categories/${category}`} className='categories-link' key={index}>
              <div className='card'>
                <img src={imageURL} alt="img"/>
                <span>{category}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <ReactPaginate
        pageCount={pageCount}
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

export default Categories;
