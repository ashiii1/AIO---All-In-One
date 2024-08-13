import React from 'react';
import  { useEffect, useState } from 'react';


const banners = [
  'https://static.vecteezy.com/system/resources/thumbnails/002/006/605/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg',
  'https://www.shutterstock.com/image-photo/fruits-vegetables-on-green-blurred-260nw-1426818593.jpg',
  'https://www.shutterstock.com/image-vector/banner-books-concept-education-learning-260nw-2331880685.jpg',
  'https://cdn.vectorstock.com/i/preview-1x/57/56/template-banner-for-online-store-with-shopping-vector-42935756.jpg',
  'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX31859615.jpg'
];

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
];

const Navbar = () => {
  return (
    <nav className="bg-red-400 text-white  text-xl p-3 shadow-md">
      <ul className="flex justify-around">
        <li className='bg-red-500 font-bold text-2xl'>ASHI</li>
        <li className="hover:text-black"><a href="/books">Books</a></li>
        <li className="hover:text-black"><a href="/furnituree">Furniture</a></li>
        <li className="hover:text-black"><a href="/shopping">Shopping</a></li>
        <li className="hover:text-black"><a href="/makeup">Makeup</a></li>
        <li className="hover:text-black"><a href="/realestate">Real Estate</a></li>
        <li className="hover:text-black"><a href="/grocery">Grocery</a></li>
        <li className="hover:text-black"><a href="/tolet">To Let</a></li>
        <li className="hover:text-black"><a href="/food-order">Food Order</a></li>
        <li className="hover:text-black"><a href="/vegetables">Vegetables</a></li>
        <li className="hover:text-black"><a href="/secondhand">Second Hand</a></li>
      </ul>
    </nav>
  );
};

const BannerSlider = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden ">
      {banners.map((banner, index) => (
        <img
          key={index}
          className={`absolute w-full h-96 object-cover transition-opacity duration-1000 ${index === currentBannerIndex ? 'opacity-100' : 'opacity-0'}`}
          src={banner}
          alt={`Banner ${index + 1}`}
          style={{ left: `${index === currentBannerIndex ? 0 : 100}%` }}
        />
      ))}
    </div>
  );
};

const CardsMain = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-center text-4xl pb-3 font-bold mb-8 text-black">Featured Categories</h2>
      <div className="grid grid-cols-1 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white  text-black rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            onClick={() => window.location.href = card.link}
          >
            <img
              className="w-full"
              src={card.imageSrc}
              alt={card.title}
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <CardsMain />
    </div>
  );
};

export default LandingPage;
