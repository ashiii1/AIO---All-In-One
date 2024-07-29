// App.js
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/books" element={<BooksCard/>} />
          <Route path="/furniture" element={<div>Furniture Page</div>} />
          <Route path="/grocery" element={<div>Grocery Page</div>} />
          <Route path="/jewellary" element={<div>Jewellary Page</div>} />
          <Route path="/shopping" element={<div>Shopping Page</div>} />
          <Route path="/tolet" element={<div>To Let Page</div>} />
          <Route path="/vegetables" element={<div>Vegetables Page</div>} />
          <Route path="/secondhand" element={<div>Second Hand Page</div>} />
          <Route path="/post" element={<div>Post Page</div>} /> */}
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
