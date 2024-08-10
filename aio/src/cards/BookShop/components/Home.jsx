import React from 'react';  
import '../styles/Home.css'
import Greeting from '../assets/greeting.gif'
import Ikigai from '../assets/ikigai.jpg'
import { Link } from 'react-router-dom';
import { BsEmojiWink } from "react-icons/bs";
import Manga from '../assets/manga-category.jpg'
import Romance from '../assets/romance-category.jpg'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll behavior
  });
}

function Home() {
  return (
    <div className='home'>
        <div className="home-content">
            <div className="greeting-words">
                <p>Hi there! <BsEmojiWink /></p>
                <p>Looking for your next read?</p>
                <p>Well, you have landed in the perfect place.</p>
                <h1>Welcome to Umbreon Books Library</h1>
                <p>Delve into our extensive collection spanning various genres, from timeless classics to contemporary bestsellers.</p>
                <p>Be sure to explore our handpicked recommendations, uncovering literary treasures you wont want to miss.</p>
                <p>And remember, every pre-ordered book includes an exclusive discount as a token of our appreciation for choosing us.</p>
                <p>While you cant directly order from this website, you can browse our selection and inquire about book availability. Feel free to start a chat with us!</p>
            </div>
            <img src={Greeting} alt="greeting" className='greeting' />
        </div>
        <div className="home-categories">
            <h2>Popular categories</h2>
            <div className="categories-card">
                <div className='card'>
                    <img src={Ikigai} alt="img"/>
                    <span>Bestsellers</span>
                </div>

                <div className='card'>
                    <img src={Romance} alt="img"/>
                    <span>Romance</span>
                </div>

                <div className='card'>
                    <img src={Manga} alt="img"/>
                    <span>Mangas</span>
                </div>
            </div>
            <Link to="/books/categories" className='see-all' onClick={scrollToTop}>
                <span>See all categories</span>
            </Link>
        </div>
    </div>
  )
}

export default Home