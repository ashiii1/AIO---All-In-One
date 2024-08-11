import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import '../styles/BooksDetails.css';

function Rating({ rating }) {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2; // Round the rating to the nearest 0.5

  // Fill the stars based on the rating
  for (let i = 1; i <= 5; i++) {
    if (roundedRating >= i) {
      stars.push(<FaStar key={i} />);
    } else if (roundedRating + 0.5 === i) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return (
    <div className='star-ratingg'>
      {stars}
    </div>
  );
}

export default Rating;
