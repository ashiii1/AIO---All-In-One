// import React from "react";
// import Card from "../components/Card";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

// function Home({ products, categories }) {
//   // const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
//   // console.log(array);

//   // const array = Array(10) // array size is 10
// 	// 			.fill()
// 	// 			.map(() => products[Math.floor(50 * Math.random())]); // numbers from 0-50 (exclusive)

//   // console.log(array);

//   return (
//     <main id="home" className="container mx-auto mb-8 px-4 mt-[140px] md:mt-[110px]">
//       <h2 className="text-3xl font-bold mb-4">Best Seller Products</h2>
//       <hr className="mb-8" />
//       <AliceCarousel
//         // autoPlay="true"
//         // autoPlayInterval={1000}
//         // autoPlayDirection="ltr"
//         // autoPlayStrategy="default"
//         controlsStrategy="responsive"
//         // disableButtonsControls
//         disableDotsControls
//         // disableSlideInfo
//         // infinite
//         // keyboardNavigation="true"
//         mouseTracking
//         // fadeOutAnimation={true}
//         // mouseDragEnabled={true}
//         // dotsDisabled={true}
//         // dotsClass="alice-carousel__dots" // Use dotsClass to target dots with CSS
//         responsive={{
//           0: { items: 1 },
//           768: { items: 2 },
//           1024: { items: 3 },
//           1280: { items: 4 },
//           // 1536: { items: 5 },
//         }}
//         swipeDelta
//         swipeExtraPadding
//         touchTracking
//         touchMoveDefaultEvents
//         className="w-full"
//         // items={}
//       >
//         {products.sort()
//             .filter(
//               (item) =>
//                 item.price > 500 && item.rating > 4.25
//             )
//             .map((item) => (
//               <Card key={item.id} item={item} category={item.category} />
//             ))}
//       </AliceCarousel>
//       <h2 className="text-3xl font-bold mb-4">Spring Sale</h2>
//       <hr className="mb-8" />
//       <AliceCarousel
//         // autoPlay="true"
//         // autoPlayInterval={1000}
//         // autoPlayDirection="ltr"
//         // autoPlayStrategy="default"
//         controlsStrategy="responsive"
//         // disableButtonsControls
//         disableDotsControls
//         // disableSlideInfo
//         // infinite
//         // keyboardNavigation="true"
//         mouseTracking
//         // fadeOutAnimation={true}
//         // mouseDragEnabled={true}
//         // dotsDisabled={true}
//         // dotsClass="alice-carousel__dots" // Use dotsClass to target dots with CSS
//         responsive={{
//           0: { items: 1 },
//           768: { items: 2 },
//           1024: { items: 3 },
//           1280: { items: 4 },
//           // 1536: { items: 5 },
//         }}
//         swipeDelta
//         swipeExtraPadding
//         touchTracking
//         touchMoveDefaultEvents
//         className="w-full"
//         // items={}
//       >
//         {products.sort()
//             .filter(
//               (item) =>
//                 item.price > 50 && item.price < 100
//             )
//             .map((item) => (
//               <Card key={item.id} item={item} category={item.category} />
//             ))}
//       </AliceCarousel>
//       <h2 className="text-3xl font-bold mb-4">New Products</h2>
//       <hr className="mb-8" />
//       <div className="flex flex-wrap justify-center">
//         {products.map((item) => (
//           <Card key={item.id} item={item} category={item.category} />
//         ))}
//       </div>
//     </main>
//   );
// }

// export default Home;
import React from "react";
import Card from "../components/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Home({ products = [] }) {
  const banners = [
    "https://i.pinimg.com/originals/cc/b3/4f/ccb34f51bba6597deec3bf36ed654315.gif",
  ];

  return (
    <main
      id="home"
      className="containe mx-auto mb-8 px-4 mt-[140px] md:mt-[110px]"
    >
      {/* Banner Carousel */}
      <div className="mb-4 w-full h-[50vh]  overflow-hidden"> {/* Set height to 50% of viewport height */}
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableDotsControls
          disableButtonsControls
          mouseTracking
          items={banners.map((banner, index) => (
            <div key={index} className="w-full h-full"> {/* Full width and height */}
              <img
                src={banner}
                alt="Banner"
                className="w-full h-full object-contain" 
                style={{ margin: 0, padding: 0 }}             />
            </div>
          ))}
        />
      </div>

      {/* Spring Sale */}
      <h2 className="text-3xl font-bold mb-1 text-center pb-8 pt-8">Spring Sale</h2>
      <hr className="mb-4" />
      {products.length > 0 && (
        <AliceCarousel
          controlsStrategy="responsive"
          disableDotsControls
          mouseTracking
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
            1280: { items: 4 },
          }}
          swipeDelta
          swipeExtraPadding
          touchTracking
          touchMoveDefaultEvents
          className="w-full"
        >
          {products
            .filter((item) => item.price > 50 && item.price < 100)
            .map((item) => (
              <Card key={item.id} item={item} category={item.category} />
            ))}
        </AliceCarousel>
      )}

      {/* New Products */}
      <h2 className="text-3xl font-bold mb-4 text-center pb-8 pt-8">New Products</h2>
      <hr className="mb-8" />
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 lg:w-1/5">
            <Card item={item} category={item.category} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
