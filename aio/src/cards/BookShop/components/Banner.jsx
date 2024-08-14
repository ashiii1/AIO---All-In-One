// import React from 'react'
// import { Link } from 'react-router-dom'

// const Banner = () => {
//   return (
//     <div>
//          <>
              
//               <section className="hero-section top-2">
//                 <div className="container mt-15">
//                   <div
//                     // id="carouselExampleFade"
//                     className="carousel slide carousel-fade w-full"
//                     data-bs-ride="carousel"
//                     to=""
//                   >
//                     <div className="carousel-inner">
//                       <div className="carousel-item active">
//                         <div
//                           style={{
//                             background: `url(/Grocery/images/slide-1.jpg) no-repeat`,
//                             backgroundSize: "cover",
//                             borderRadius: ".5rem",
//                             backgroundPosition: "center",
//                           }}
//                         >
//                           <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-18 text-xs-center ">
//                             <span className="badge text-bg-warning">
//                               Opening Sale Discount 50%
//                             </span>
//                             <h2 className="text-dark display-5 fw-bold mt-4">
//                               SuperMarket Daily <br /> Fresh Grocery
//                             </h2>
//                             <p className="lead ">
//                               Introduced a new model for online grocery shopping
//                               and convenient home delivery.
//                             </p>
//                             <Link to="" className="btw-0 btn-da  pt-3">
//                             <div className="w-36 h-15  bg-black text-center rounded-sm text-white text-3xl pt-2">
//                               Shop Now{" "}
//                               </div>
//                               <i className="feather-icon icon-arrow-right ms-1" />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                      </div>
                     
//                     <Link
//                       className="carousel-control-prev"
//                       to=""
//                       role="button"
//                       data-bs-slide="prev"
//                     >
//                       <span
//                         className="carousel-control-prev-icon"
//                         aria-hidden="true"
//                       />
//                       <span className="visually-hidden">Previous</span>
//                     </Link>
//                     <Link
//                       className="carousel-control-next"
//                       to=""
//                       role="button"
//                       data-bs-slide="next"
//                     >
//                       <span
//                         className="carousel-control-next-icon"
//                         aria-hidden="true"
//                       />
//                       <span className="visually-hidden">Next</span>
//                     </Link>
//                   </div>
//                 </div>
//               </section>
//             </>
//     </div>
//   )
// }

// export default Banner

// import React from 'react';
// import { Link } from 'react-router-dom';
// import AliceCarousel from "react-alice-carousel";

// const Banner = () => {
//     const banners = [
//         "https://lh3.googleusercontent.com/proxy/EzxuD_kB5J1hkhEO1s7U9t9ro3HNuHT0n1uGzxdnQNHKNTkMUyD4WtoaiwnApXdCScqV_Zn2fUCrKOXd_U9MDClKCYdoBMv5Eg0npA",
//       ];
//   return (
//     <main
//     id="home"
//     className="containe pb-4 mx-auto px-4 mt-[110px] md:mt-[10px]"
//   >
//     {/* Banner Carousel */}
//     <div className="mb-4 w-full h-[50vh]  overflow-hidden"> {/* Set height to 50% of viewport height */}
//       <AliceCarousel
        
//         items={banners.map((banner, index) => (
//           <div key={index} className="w-full h-full"> {/* Full width and height */}
//             <img
//               src={banner}
//               alt="Banner"
//               className="w-full h-full object-contain" 
//               style={{ margin: 0, padding: 0 }}             />
//           </div>
//         ))}
//       />
      
//     </div>
//     </main>
//   );
// };

// export default Banner;import React from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from "react-alice-carousel";

const Banner = () => {
    const banners = [
        "https://lh3.googleusercontent.com/proxy/EzxuD_kB5J1hkhEO1s7U9t9ro3HNuHT0n1uGzxdnQNHKNTkMUyD4WtoaiwnApXdCScqV_Zn2fUCrKOXd_U9MDClKCYdoBMv5Eg0npA",
    ];

  return (
    <main id="home" className="containe pb-4 mx-auto px-4 mt-[110px] md:mt-[10px]">
      {/* Banner Carousel */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <AliceCarousel
          items={banners.map((banner, index) => (
            <div key={index} className="w-full h-full relative">
              <img
                src={banner}
                alt="Banner"
                className="w-full h-full object-cover"
                style={{ margin: 0, padding: 0 }}
              />
              <div className="absolute inset-0 flex pt-16 flex-col items-center justify-center text-center text-white p-4">
                <h2 className="text-6xl font-bold mb-2 pt-20 pb-20">
                Discover Your Next Favorite Book to Read


                </h2>
                <p className="text-lg mb-4 pt-20">
                Welcome , your ultimate destination for books across every genre and category. Whether you are searching for the latest bestsellers, timeless classics, or hidden gems, we have something for every reader. Explore our extensive collection of fiction, non-fiction, romance, mystery, science fiction, and more. Dive into the world of literature with ease and find your perfect book today. Your next adventure is just a page away!                </p>
               
              </div>
            </div>
          ))}
        />
      </div>
    </main>
  );
};

export default Banner;
