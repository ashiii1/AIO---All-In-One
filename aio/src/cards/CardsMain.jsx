// CardsMain.jsx
import React from 'react';

const cardsData = [
  { imageSrc: 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F9b4ae874-8ae2-11ee-87cc-5c1387c06794.jpg?crop=1600%2C900%2C0%2C0&resize=1200', title: 'Books', description: 'Best book store', link: '/books' },
  { imageSrc: 'https://5.imimg.com/data5/LE/QK/KP/IOS-76296248/product-jpeg-1000x1000.png', title: 'Furniture', description: 'Exchange your furniture', link: '/furnituree' },
  { imageSrc: 'https://market.todaypricerates.com/images/gocery.jpg', title: 'Grocery', description: 'Fresh groceries available', link: '/grocery' },
  { imageSrc: 'https://www.weddingsutra.com/images/Vendor_Images/Bridal_Jewellery/Kalyan_Jewellers/Muslim_Nikkah.jpg', title: 'Makeup', description: 'Elegant Makeup Products', link: '/makeup' },
  { imageSrc: 'https://boutiquestoredesign.com/wp-content/uploads/2018/09/clothes-store-floating-wall-display-shelves-design-ideas-for-retail.jpg', title: 'Shopping', description: 'Trendy clothes and accessories', link: '/shopping' },
  { imageSrc: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg', title: 'To Let', description: 'Get into your new house', link: '/tolet' },
  { imageSrc: 'https://tse3.mm.bing.net/th?id=OIP.YTTvKnlFKw5hlbwIGYTo9AAAAA&pid=Api&P=0&h=180', title: 'Foodorder', description: 'Get into your new house', link: '/food-order' },
  { imageSrc: 'https://techcrunch.com/wp-content/uploads/2015/03/groceries-e1554037962210.jpg', title: 'Vegetables', description: 'Fresh vegetables for you', link: '/vegetables' },
  { imageSrc: 'https://cdn-icons-png.flaticon.com/512/10203/10203752.png', title: 'Second Hand', description: 'Buy and sell second-hand items', link: '/secondhand' },
  { imageSrc: 'https://tse3.mm.bing.net/th?id=OIP.CKFK1fo-TcgXoWtsFJnzTgHaHa&pid=Api&P=0&h=180', title: 'Post', description: 'Post your ads here', link: '/post' },
];

const CardsMain = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white text-black rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => window.location.href = card.link}
          >
            <img
              className="w-full"
              src={card.imageSrc}
              alt={card.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsMain;

// // CardsMain.jsx// CardsMain.jsx
// import React from 'react';

// const CardsMain = () => {
//   return (
//     <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
//       <div className="flex flex-wrap gap-44">
//         {/* Card 1 */}
//         <div
//           className="w-32 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/books'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F9b4ae874-8ae2-11ee-87cc-5c1387c06794.jpg?crop=1600%2C900%2C0%2C0&resize=1200"
//             alt="Books"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">Books</h3>
//             <p className="text-xs">Best book store</p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div
//           className="w-full sm:w-1/3 lg:w-1/4 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/furniture'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://5.imimg.com/data5/LE/QK/KP/IOS-76296248/product-jpeg-1000x1000.png"
//             alt="Furniture"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">Furniture</h3>
//             <p className="text-xs">Exchange your furniture</p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div
//           className="w-full sm:w-1/3 lg:w-1/4 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/grocery'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://market.todaypricerates.com/images/gocery.jpg"
//             alt="Grocery"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">Grocery</h3>
//             <p className="text-xs">Fresh groceries available</p>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div
//           className="w-full sm:w-1/3 lg:w-1/4 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/jewellary'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://www.weddingsutra.com/images/Vendor_Images/Bridal_Jewellery/Kalyan_Jewellers/Muslim_Nikkah.jpg"
//             alt="Jewellery"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">Jewellery</h3>
//             <p className="text-xs">Elegant jewellery collections</p>
//           </div>
//         </div>

//         {/* Card 5 */}
//         <div
//           className="w-full sm:w-1/3 lg:w-1/4 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/shopping'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://boutiquestoredesign.com/wp-content/uploads/2018/09/clothes-store-floating-wall-display-shelves-design-ideas-for-retail.jpg"
//             alt="Shopping"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">Shopping</h3>
//             <p className="text-xs">Trendy clothes and accessories</p>
//           </div>
//         </div>

//         {/* Card 6 */}
//         <div
//           className="w-full sm:w-1/3 lg:w-1/4 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/tolet'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
//             alt="To Let"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">To Let</h3>
//             <p className="text-xs">Get into your new house</p>
//           </div>
//         </div>

//         {/* Card 7 */}
//         <div
//           className="w-full sm:w-1/3 lg:w-1/4 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/foodorder'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://tse3.mm.bing.net/th?id=OIP.YTTvKnlFKw5hlbwIGYTo9AAAAA&pid=Api&P=0&h=180"
//             alt="Foodorder"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">Foodorder</h3>
//             <p className="text-xs">Order food easily</p>
//           </div>
//         </div>

//         {/* Card 8 */}
//         <div
//           className="w-full sm:w-1/3 lg:w-1/4 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/vegetables'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://techcrunch.com/wp-content/uploads/2015/03/groceries-e1554037962210.jpg"
//             alt="Vegetables"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">Vegetables</h3>
//             <p className="text-xs">Fresh vegetables for you</p>
//           </div>
//         </div>

//         {/* Card 9 */}
//         <div
//           className="w-full sm:w-1/3 lg:w-1/4 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/secondhand'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://cdn-icons-png.flaticon.com/512/10203/10203752.png"
//             alt="Second Hand"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">Second Hand</h3>
//             <p className="text-xs">Buy and sell second-hand items</p>
//           </div>
//         </div>

//         {/* Card 10 */}
//         <div
//           className="w-full sm:w-1/3 lg:w-1/4 bg-black text-white rounded overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
//           onClick={() => window.location.href = '/post'}
//         >
//           <img
//             className="w-full h-32 object-cover"
//             src="https://tse3.mm.bing.net/th?id=OIP.CKFK1fo-TcgXoWtsFJnzTgHaHa&pid=Api&P=0&h=180"
//             alt="Post"
//             style={{ objectFit: 'cover' }}
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold">Post</h3>
//             <p className="text-xs">Post your ads here</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardsMain;
