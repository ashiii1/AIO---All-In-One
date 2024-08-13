import React, { useState } from "react";
import "./Carousel.css";
import CarouselImage1 from "../../assets/Images/sliderImage1.png";
import CarouselImage2 from "../../assets/Images/sliderImage2.png";
import CarouselImage3 from "../../assets/Images/sliderImage3.png";
import { Link } from "react-router-dom";
const Carousel = () => {
  const slides = [CarouselImage1, CarouselImage2, CarouselImage3];
  const [sliderCount, setSliderCount] = useState(0);
  const nextSlide = (e) => {
    if (sliderCount !== slides.length - 1) {
      setSliderCount(sliderCount + 1);
    } else {
      setSliderCount(0);
    }
  };
  const prevSlide = (e) => {
    if (sliderCount !== 0) {
      setSliderCount(sliderCount - 1);
    } else {
      setSliderCount(slides.length - 1);
    }
  };
  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{ backgroundImage: `url(${slides[sliderCount]})` }}
      >
        <i className="fa fa-angle-left fa-5x" onClick={prevSlide}></i>
        <i className="fa fa-angle-right fa-5x" onClick={nextSlide}></i>
      </div>
    </div>
  );
};
export { Carousel };
