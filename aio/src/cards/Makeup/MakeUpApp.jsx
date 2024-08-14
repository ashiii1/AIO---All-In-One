import React from 'react';
import { createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import SignIn from "./pages/Account/signIn/SignIn";
import SignUp from "./pages/Account/signUp/SignUp";
import Delivery from "./pages/Delivery/Delivery";
import Payment from "./pages/Payment/Payment";
import Return from "./pages/Returns/Returns";
import PaymentMethods from "./pages/PaymentMethod/PaymentMethod";

const MakeUpApp = () => {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/return" element={<Return />} />
        <Route path="/paymentMethod" element={<PaymentMethods />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </>
  );

  return (
    <div>
      {routes}
    </div>
  );
};

export default MakeUpApp;
