import React from 'react';
import  { useEffect, useState } from 'react';
import MainProd from './MainProd';
import AliceCarousel from "react-alice-carousel";
import { ShoppingCart } from 'lucide-react'; 



const banners = [
  'https://img.freepik.com/free-vector/flat-design-fashion-boutique-twitch-banner_23-2149314982.jpg?semt=ais_hybrid',
  'https://img.freepik.com/free-vector/gradient-boutique-twitch-banner_23-2149334951.jpg',
  'https://img.freepik.com/free-vector/flat-design-minimal-boutique-twitch-banner-template_23-2149303608.jpg',
  ];

const cardsData = [
  { imageSrc: 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F9b4ae874-8ae2-11ee-87cc-5c1387c06794.jpg?crop=1600%2C900%2C0%2C0&resize=1200', title: 'Books', description: 'Best book store', link: '/books' },
  { imageSrc: 'https://5.imimg.com/data5/LE/QK/KP/IOS-76296248/product-jpeg-1000x1000.png', title: 'Furniture', description: 'Exchange your furniture', link: '/furnituree' },
  { imageSrc: 'https://img.pikbest.com/origin/06/05/45/56ipIkbEsTFMk.jpg!bw700', title: 'Grocery', description: 'Fresh groceries available', link: '/grocery' },
  { imageSrc: 'http://c8.alamy.com/comp/J516JC/beauty-shop-business-card-design-banner-cosmetics-J516JC.jpg', title: 'Makeup', description: 'Elegant Makeup Products', link: '/makeup' },
  { imageSrc: 'https://boutiquestoredesign.com/wp-content/uploads/2018/09/clothes-store-floating-wall-display-shelves-design-ideas-for-retail.jpg', title: 'Shopping', description: 'Trendy clothes and accessories', link: '/shopping' },
  { imageSrc: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg', title: 'To Let', description: 'Get into your new house', link: '/tolet' },
  { imageSrc: 'https://tse3.mm.bing.net/th?id=OIP.YTTvKnlFKw5hlbwIGYTo9AAAAA&pid=Api&P=0&h=180', title: 'Foodorder', description: 'Get into your new house', link: '/food-order' },
  { imageSrc: 'https://cdn-icons-png.flaticon.com/512/10203/10203752.png', title: 'Second Hand', description: 'Buy and sell second-hand items', link: '/secondhand' },
];

const Navbar = () => {
  return (
    <div>
       <div className='p-4 bg-red-100 text-black pb-1 text-center pt-2 flex justify-between items-center'>
        <div className="flex-grow text-center">
          <span className="text-lg font-bold">Discover Exciting New Categories</span>
        </div>
        <div className="flex items-center">
          <ShoppingCart className="w-10 h-10 text-black" />
          <div className=''> 
          <span className="ml-0.5 text-lg ">Main Cart</span> 
        </div>
        </div>
      </div>
      <nav className="bg-red-300 text-black text-xl p-1 shadow-md">
        <ul className="flex justify-around p-2 space-x-4">
          <li className="bg-red-400 font-bold text-2xl">ASHI</li>
          <li className="hover:text-black"><a href="/books">Books</a></li>
          <li className="hover:text-black"><a href="/furniture">Furniture</a></li>
          <li className="hover:text-black"><a href="/shopping">Shopping</a></li>
          <li className="hover:text-black"><a href="/makeup">Makeup</a></li>
          <li className="hover:text-black"><a href="/grocery">Grocery</a></li>
          <li className="hover:text-black"><a href="/tolet">To Let</a></li>
          <li className="hover:text-black"><a href="/food-order">Food Order</a></li>
          <li className="hover:text-black"><a href="/secondhand">Second Hand</a></li>
        </ul>
      </nav>
    </div>
  );
  
};

const BannerSlider = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
<div className="relative w-full h- pt-2 overflow-hidden">
{banners.map((banner, index) => (
        <img
          key={index}
          className={`absolute w-full  object-cover transition-opacity duration-1000 ${index === currentBannerIndex ? 'opacity-100' : 'opacity-0'}`}
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
    <div className="p-8 bg-white">
      <h2 className="text-center text-4xl pb-3 font-bold mb-8 text-black">Categories</h2>
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


function LandingPage({ products = [] }) {
  const banners = [
    "https://i.pinimg.com/originals/cc/b3/4f/ccb34f51bba6597deec3bf36ed654315.gif",
    "https://static.vecteezy.com/system/resources/previews/006/633/040/original/online-shopping-spring-on-phone-flower-pink-big-sale-banner-marketing-poster-fashion-vector.jpg",
  "https://assets.limetray.com/assets/image_manager/uploads/7639/eb-slide-23423-3.jpg"
  ];  
  
  
  
  
  return (
    <div>
      <Navbar />

<main
      id="home"
      className="containe mx-auto mb-5 px-2 mt-5 md:mt-[110px]"
    >
      <div className="mb-4 w-full h-[50vh]  overflow-hidden"> 
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableDotsControls
          disableButtonsControls
          mouseTracking
          items={banners.map((banner, index) => (
            <div key={index} className="w-full h-full"> 
              <img
                src={banner}
                alt="Banner"
                className="w-full h-full object-contain" 
                style={{ margin: 0, padding: 0 }}             />
            </div>
          ))}
        />
      </div>
</main>
      <BannerSlider />
      <CardsMain />
      <MainProd/>
    </div>
  );
}

export default LandingPage;
