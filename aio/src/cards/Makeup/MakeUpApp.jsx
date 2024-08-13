import React from 'react'
  import { Route, Routes } from "react-router-dom";
  import { useContext, useEffect } from "react";
  import { TopBar } from "./components/index.js";
  import { Header } from './components/index.js';
  import { StateContext } from "./Context";
  import { HomePage, ProductListingPage, Signin, Signup, CartPage, WishlistPage, SingleProductPage, UserProfile, Checkout } from './pages/index.js'
  import { setInitialUseraddress } from "./Services/addressService";
  
  const MakeUpApp = () => {
    const { state, dispatch } = useContext(StateContext)
    useEffect(() => {
      async function fetchData() {
        try {
          const res = await fetch('/api/products', { method: "GET" })
          const data = await res.json()
          dispatch({ type: 'SET_PRODUCTS', payload: data.products })
        } catch (e) {
          console.log(e)
        }
      }
      fetchData();
    }, [])
  
    useEffect(() => {
      setInitialUseraddress(state, dispatch)
    }, [])
  
    return (
      <>
        <TopBar />
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/productlistingpage" element={<ProductListingPage />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/cartpage" element={<CartPage />} />
          <Route exact path="/wishlistpage" element={<WishlistPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/product/:productId" element={<SingleProductPage />} />
          <Route exact path="/user_profile" element={<UserProfile />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={
              <>
                <h1>No page found</h1>
              </>
            }
          />
        </Routes>
      </>
    );
  }
  

export default MakeUpApp