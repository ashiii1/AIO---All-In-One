// // import React from 'react'
// // import Navbar from './Routes/Navbar';
// // import AllRoutes from './Routes/AllRoutes';
// // import Footer from './Routes/Footer';

// // const FoodApp = () => {
// //   return (
   
// //         <div className="App">
// //           <Navbar />
// //           <AllRoutes />
// //           <Footer />
// //         </div>
// //       );
// //     }
// //     //   API https://street-bites-api.onrender.com/menu
  

// // export default FoodApp

// import React from 'react'
//     import { useState } from 'react'
//     import Navbar from './Components/Navbar/Navbar'
//     import Home from './pages/Home/Home'
//     import Cart from './pages/Cart/Cart'
//     import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
//     import { Route, Routes } from 'react-router-dom'
//     import Footer from './Components/Footer/Footer'
//     import LoginPopup from './Components/LoginPopup/LoginPopup'
    
//     const FoodApp = () => {
      
//       const [showLogin, setShowLogin] = useState(false);
    
//       return (
//         <>
//         {showLogin? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
//         <div className='app'>
//           <Navbar setShowLogin={setShowLogin}/>
//           <Routes>
//             <Route path='/' element={ <Home />}/>
//             <Route path='/cart' element={ <Cart />}/>
//             <Route path='/order' element={ <PlaceOrder />}/>
//           </Routes>
//         </div>
//         <Footer />
//         </>
//       )
//     }
    
    

// export default FoodApp
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import CardDetail from './pages/CardDetail/CardDetail'; // Import the new component
import { Route, Routes } from 'react-router-dom';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import MainCart from '../MainCart';


const FoodApp = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
           <MainCart/>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          
          <Route path='/food-order/:id' element={<CardDetail />} /> {/* Add this route */}
        </Routes>
      </div>
      <ToastContainer /> {/* Add ToastContainer here */}

    </>
  );
};

export default FoodApp;
