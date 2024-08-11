import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingMain from '../cards/Shopping/ShoppingMain';
import VegetablesMain from '../cards/Vegetables/VegetablesMain';
import MakeupMain from './Makeup/MakeupMain';
import ToletMain from '../cards/Tolet/ToletMain';
import GroceryMain from '../cards/Grocery/GroceryMain';
import BookMain from '../cards/BookShop/BookMain';
import SecondHandMain from '../cards/SecondHand/SecondHandMain';
import PostMain from '../cards/Post/PostMain';
import FurnitureMain from '../cards/Furniture/FurnitureMain';
import FoodOrderMain from '../cards/FoodOrder/FoodOrderMain';
import CardsMain from './CardsMain'




const CardsApp = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<CardsMain/>} />

        <Route path="/shopping/*" element={<ShoppingMain />} />
        <Route path="/vegetables/*" element={<VegetablesMain />} />
        <Route path="food-order/*" element={<FoodOrderMain />} />
        <Route path="/makeup/*" element={<MakeupMain />} />
        <Route path="/furnituree/*" element={<FurnitureMain />} />
        <Route path="/tolet/*" element={<ToletMain />} />
        <Route path="/grocery/*" element={<GroceryMain />} />
        <Route path="/books/*" element={<BookMain />} />
        <Route path="/secondhand" element={<SecondHandMain />} />
        <Route path="/post" element={<PostMain />} />      
         
      </Routes>
  </BrowserRouter>
  )
}

export default CardsApp

// import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import ShoppingMain from '../cards/Shopping/ShoppingMain';
// import VegetablesMain from '../cards/Vegetables/VegetablesMain';
// import JewellaryMain from '../cards/Jewellary/JewellaryMain';
// import ToletMain from '../cards/Tolet/ToletMain';
// import GroceryMain from '../cards/Grocery/GroceryMain';
// import BookMain from '../cards/BookShop/BookMain';
// import SecondHandMain from '../cards/SecondHand/SecondHandMain';
// import PostMain from '../cards/Post/PostMain';
// import FurnitureMain from '../cards/Furniture/FurnitureMain';
// import FoodOrderMain from '../cards/FoodOrder/FoodOrderMain';

// const CardsApp = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><Link to="/shopping">Shopping</Link></li>
//           <li><Link to="/vegetables">Vegetables</Link></li>
//           <li><Link to="/food-order">Food Order</Link></li>
//           <li><Link to="/jewellary">Jewellary</Link></li>
//           <li><Link to="/furniture">Furniture</Link></li>
//           <li><Link to="/tolet">Tolet</Link></li>
//           <li><Link to="/grocery">Grocery</Link></li>
//           <li><Link to="/books">Books</Link></li>
//           <li><Link to="/secondhand">Second Hand</Link></li>
//           <li><Link to="/post">Post</Link></li>
//         </ul>
//       </nav>

//       {/* Render components based on the route */}
//       <Routes>
//         <Route path="/shopping" element={<ShoppingMain />} />
//         <Route path="/vegetables" element={<VegetablesMain />} />
//         <Route path="/food-order/*" element={<FoodOrderMain />} />
//         <Route path="/jewellary" element={<JewellaryMain />} />
//         <Route path="/furniture" element={<FurnitureMain />} />
//         <Route path="/tolet" element={<ToletMain />} />
//         <Route path="/grocery" element={<GroceryMain />} />
//         <Route path="/books" element={<BookMain />} />
//         <Route path="/secondhand" element={<SecondHandMain />} />
//         <Route path="/post" element={<PostMain />} />
//       </Routes>
//     </div>
//   );
// };

// export default CardsApp;

// //    // App.js
// //    import React from 'react';
// //    import { BrowserRouter, Routes, Route } from 'react-router-dom';
   
// //    // Import your components
// //    import ShoppingMain from '../cards/Shopping/ShoppingMain';
// //    import VegetablesMain from '../cards/Vegetables/VegetablesMain';
// //    import JewellaryMain from '../cards/Jewellary/JewellaryMain';
// //    import ToletMain from '../cards/Tolet/ToletMain';
// //    import GroceryMain from '../cards/Grocery/GroceryMain';
// //    import BookMain from '../cards/BookShop/BookMain';
// //    import SecondHandMain from '../cards/SecondHand/SecondHandMain';
// //    import PostMain from '../cards/Post/PostMain';
// //    import FurnitureMain from '../cards/Furniture/FurnitureMain';
// //    import FoodOrderMain from '../cards/FoodOrder/FoodOrderMain';
// //    import CardsMain from '../cards/CardsMain'; // CardsMain component for main category navigation
   
// //    // Import pages for ToletMain
// //    import HomePage from "../cards/Tolet/routes/homePage/homePage";
// //    import ListPage from "../cards/Tolet/routes/listPage/listPage";
// //    import Layout from "../cards/Tolet/routes/layout/layout";
// //    import SinglePage from "../cards/Tolet/routes/singlePage/singlePage";
// //    import ProfilePage from "../cards/Tolet/routes/profilePage/profilePage";
// //    import Login from "../cards/Tolet/routes/login/login";
// //    import Register from "../cards/Tolet/routes/register/register";
   

// // const CardsApp = () => {
  
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<CardsMain />} />
// //         <Route path="/shopping" element={<ShoppingMain />} />
// //         <Route path="/vegetables" element={<VegetablesMain />} />
// //         <Route path="/food-order/*" element={<FoodOrderMain />} />
// //         <Route path="/jewellary" element={<JewellaryMain />} />
// //         <Route path="/furniture" element={<FurnitureMain />} />
// //         <Route path="/tolet/*" element={<ToletMain />} />
// //         <Route path="/grocery" element={<GroceryMain />} />
// //         <Route path="/books" element={<BookMain />} />
// //         <Route path="/secondhand" element={<SecondHandMain />} />
// //         <Route path="/post" element={<PostMain />} />
        
// //         {/* Routes for /food path */}
// //         <Route path="/tolet" element={<Layout />}>
// //           <Route index element={<HomePage />} />
// //           <Route path="list" element={<ListPage />} />
// //           <Route path=":id" element={<SinglePage />} />
// //           <Route path="profile" element={<ProfilePage />} />
// //           <Route path="login" element={<Login />} />
// //           <Route path="register" element={<Register />} />
// //         </Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }



// // export default CardsApp
