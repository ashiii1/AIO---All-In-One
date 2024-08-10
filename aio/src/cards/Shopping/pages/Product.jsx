import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { BsCart4 } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";
import "../assets/css/style.css";
import { SlArrowRight } from "react-icons/sl";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  // AiFillStar,
  // AiOutlineStar,
} from "react-icons/ai";
import OtherProducts from "../components/OtherProducts";

//Import Splide and SplideSlide components
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// or only core styles
// import '@splidejs/react-splide/css/core';

// const cartData=require('../cart.json');

// useEffect(()=>{

//   const cartData=JSON.parse(localStorage.getItem('cartInfo'))

// },[])

const Product = ({ products }) => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartInfo")) || []
  );
  const [itemQty, setItemQty] = useState(1);
  const { id } = useParams();
  // console.log(id);
  // console.log(products);
  const product = products.find((item) => item.id.toString() === id);
  // let itemQty =1;
  // console.log(product);
  const handleItemIncrease = (item) => {
    // itemQty = itemQty+1;
    //  console.log( itemQty);
    setItemQty((itemQty) => itemQty + 1);
  };
  const handleItemDecrease = (item) => {
    if (itemQty > 0) {
      setItemQty((itemQty) => itemQty - 1);
    }
  };

  function getRatings() {
    setTimeout(() => {
      const starPercentageRounded = (product.rating / 5) * 100;
      // console.log(starPercentageRounded);
      const el = document.querySelector(".stars-inner");
      el.style.width = Math.round(starPercentageRounded) + "%";
      // console.log(el);
    }, 0);
  }
  const handleAddToCart = (cartItem) => {
    product.qty = itemQty;
    cartData.push(product);
    console.log("Product jsx-54", product);
    console.log("Cart -Product jsx-54", cartData);
    localStorage.setItem("cartInfo", JSON.stringify(cartData));

    // finding what is the position of the item that need to be removed

    // let obj = cartData.find(x => x.id == cartItem.id);
    // let index = cartData.indexOf(obj)
    // // console.log(index);
    // cartData.splice(index,1);
    // console.log(cartData);
  };

  // document.addEventListener('DOMContentLoaded',getRatings);
  // <script>
  // document.addEventListener('DOMContentLoaded',getRatings);
  // </script>

  // START ALICE CAROUSEL

  // console.log(product.images);
  // console.log(product);

  // const items = product.images.map((item, i) => {
  //   return (
  //     <div className="item" data-value={i}>
  //       <img src={item} alt={i}/>
  //     </div>
  //   );
  // });

  // const items = product.images.map((item, i) => {
  //   return (
  //     <SplideSlide>
  //       <img src={item} alt={i}/>
  //       </SplideSlide>
  //   );
  // });

  //  console.log(items1);
  // const items = [];
  // product.images.forEach((element, i) => {
  //   let html = (
  //     <div key={i} className="item" data-value={i}>
  //       <img src={element} />
  //     </div>
  //   );
  //   items.push(html);
  // });

  // END ALICE CAROUSEL

  // start splide
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlides = () => {
    return product.images.map((item, i) => (
      <SplideSlide key={i}>
        <img src={item} alt={i} />
      </SplideSlide>
    ));
  };

  const renderThumbs = () => {
    return product.images.map((item, i) => (
      <SplideSlide key={i}>
        <img src={item} alt={i} />
      </SplideSlide>
    ));
  };

  // end splide

  // /**
  //  * The thumbnail Splide component.
  //  */

  return (
    <>
      <main id="product">
        <hr />
        <article className="mt-[140px] md:mt-[110px]">
          {product && (
            <>
              <div className="w-[90%] mx-auto flex flex-col-reverse gap-4 md:flex-row ">
                <div
                  id="images"
                  className="w-full flex items-center justify-center md:w-1/2"
                >
                  {/* Start Splide carousel */}
                  <div className="wrapper w-[100px]">
                    <Splide
                      options={{
                        direction: "ttb",
                        height: "550px",
                        type: "slide",
                        // perPage: 3,
                        // rewind: true,
                        gap: '5px',
                        pagination: false,
                        fixedWidth: "100px",
                        fixedHeight: "100px",
                        // cover: true,
                        // focus: 'center',
                        // trimSpace: false,
                        isNavigation: true,
                        width: "100px",
                        arrows: false,
                        // keyboard: 'global',
                      }}
                      ref={thumbsRef}
                      aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
                    >
                      {renderThumbs()}
                    </Splide>
                  </div>
                  <div className="wrapper w-[100%]">
                    <Splide
                      options={{
                        direction: "ltr",
                        type: "fade",
                        // perPage: 1,
                        // perMove: 1,
                        // gap: '1rem',
                        rewind: true,
                        pagination: false,
                        // height: '400px',
                        // heightRatio: '1.9',
                        width: "100%",
                        height: "600px",
                        rewindByDrag: 'true',
                        // padding: '10%',
                        // arrows: false,
                        autoplay: true,
                        interval: 3000,
                        keyboard: 'global',
                        // cover: true,
                      }}
                      ref={mainRef}
                      aria-labelledby="thumbnail-slider-example"
                    >
                      {renderSlides()}
                    </Splide>
                  </div>
                  {/* End Splide carousel */}
                </div>

                <div id="details" className="w-full md:w-1/2">
                  <div className="flex flex-col gap-4 text-start ">
                    <h1 className="text-4xl">{product.title}</h1>
                    <div className="reviews">
                      <div className="flex">
                        {/* Adding rating Ramaz */}
                        <div className="">
                          <p className="">
                            <b>Rating:</b>{" "}
                            {Math.round(product.rating * 10) / 10}
                          </p>
                          <div className="stars-outer">
                            <div id="toni" className="stars-inner"></div>
                          </div>
                          <span className="number-rating"></span>
                        </div>

                        {/* <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar /> */}
                      </div>
                      {/* ramaz */}
                      {/* <p>{product.reviewed} reviews</p> */}
                    </div>
                    <p className="text-">
                      <b>Description: </b>
                      {product.description}
                    </p>
                    <p className="">
                      <b>Brand:</b> {product.brand}
                    </p>
                    <p className="">
                      <b>Category:</b> {product.category}
                    </p>
                    <p className="text-3xl font-bold text-red-600">
                      £{product.price}
                    </p>
                    <div className="flex align-items-center gap-2">
                      <p>
                        <b>Quantity:</b>
                      </p>
                      <p className="flex border border-solid border-gray-500">
                        <button
                          className="text-base py-3 px-3 cursor-pointer border-r border-solid border-gray-500 text-green-600"
                          onClick={() => {
                            // console.log(item);
                            handleItemIncrease(product);
                          }}
                        >
                          {" "}
                          <AiOutlinePlus />{" "}
                        </button>

                        <span className="text-xl py-2 px-3 cursor-pointer">
                          {itemQty}
                        </span>
                        <button
                          className="text-base py-3 px-3 cursor-pointer border-l border-solid border-gray-500 text-green-600"
                          onClick={() => {
                            // console.log(item);
                            handleItemDecrease(product);
                          }}
                        >
                          <AiOutlineMinus />{" "}
                        </button>
                      </p>
                    </div>
                    {/* Ramaz */}
                    <div className="flex flex-row flex-wrap gap-2">
                      <button
                        id="addtocart"
                        className="w-60 justify-center text-2xl flex flex-row p-2 rounded-md bg-purple-900 text-white border-2 border-purple-700 hover:text-slate-900 hover:bg-rose-800 active:bg-green-900 active:mt-1 active:ml-1"
                        type="button"
                        onClick={() => {
                          // console.log(item);
                          handleAddToCart(product);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {!product && (
            <>
              <h2>Product Not Found</h2>
              <p>Well, thats disappointing.</p>
              <p>
                <Link to="/products">Visit product section</Link>
              </p>
            </>
          )}
        </article>
      </main>
      <section>
        <OtherProducts products={products} product={product} />
      </section>
      {getRatings()}
    </>
  );
};

export default Product;
