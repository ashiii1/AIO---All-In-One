import { Routes, Route } from "react-router-dom";

import { HomeLayout } from "./layouts/HomeLayout";
import { ShopsLayout } from "./layouts/ShopsLayout";
// import ProductLayout from "./layouts/ProductLayout";

import Shops from "./pages/Shops";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import ProductPreview from "./pages/ProductPreview";
import NotFound from "./pages/NotFound";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";
import './css/Furniture.css'


const FurnitureApp = () => {    return (
      <>
        <Routes>
          {/* Home-page route */}
          {/* <Route path="/" element={<HomeLayout />} /> */}
  
          {/* shops-page Route */}
          <Route path="/" element={<ShopsLayout />}>
            <Route index element={<Shops />} />
            <Route path=":productid" element={<ProductDetail />}></Route>
  
            <Route path="product-category/:category/">
              <Route index element={<Category />}></Route>
              <Route path=":productid" element={<ProductPreview />}></Route>

            </Route>
          </Route>
       
  
          {/* if the route doesn't match to the above routes, 
          redirect user to the not-found(404) page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
  

export default FurnitureApp