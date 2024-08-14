import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Categories = ({ categories, products }) => {
  return (
    <>
      {/* <h1>Categories</h1> */}

      {categories.map((category) => (
        <>
          <section className="mt-[140px] md:mt-[110px]">
            <div className="flex justify-center items-center text-slate-600">
              <h2 className="text-3xl p-2">{category.toUpperCase()} ➡️</h2>
              <div className="">
                <Link to={`/shopping/categories/${category}`}>
                  <p className=" text-2xl p-2 underline">All products</p>
                </Link>
              </div>
            </div>
            <hr className="line" />
            <div className="flex flex-wrap justify-center">
              <AliceCarousel
                // autoPlay="true"
                // autoPlayInterval={2000}
                // autoPlayDirection="ltr"
                // autoPlayStrategy= "default"
                controlsStrategy="responsive"
                // disableButtonsControls
                disableDotsControls
                // disableSlideInfo
                infinite
                // keyboardNavigation
                mouseTracking
                // fadeOutAnimation={true}
                // mouseDragEnabled={true}
                // dotsDisabled={true}
                // dotsClass="alice-carousel__dots" // Use dotsClass to target dots with CSS
                responsive={{
                  0: { items: 1 },
                  768: { items: 2 },
                  1024: { items: 3 },
                  1280: { items: 4 },
                  // 1536: { items: 5 },
                }}
                swipeDelta
                swipeExtraPadding
                touchTracking
                touchMoveDefaultEvents
                className="w-full"
              >
                {products
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Card key={item.id} item={item} category={category} />
                  ))}
              </AliceCarousel>
            </div>
          </section>
        </>
      ))}
    </>
  );
};

export default Categories;
