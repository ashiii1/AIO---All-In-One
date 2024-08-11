import React from 'react'
  import { useEffect, useLayoutEffect, useState } from "react";
import {
  
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import database from "./data.json";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Thanks from "./pages/ThankYou";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
// import cart from "./pages/cart.json";
import ScrollBtn from "./components/ScrollBtn";


const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

// Cheking if Cart Data exist in LocalStorage
if (!localStorage.getItem('cartInfo'))
{
  const cartData=JSON.parse(localStorage.getItem('cartInfo'));
  console.log("start APP 34",cartData);
} else {localStorage.setItem('cartInfo',JSON.stringify([]))}


const ShopApp = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ]);
  const [products, setProducts] = useState(database);
  const [cartData, setCartData] = useState(database);

  useEffect(() => {
     const fetchProducts = async () => {
      try {
        // const response = await fetch("https://dummyjson.com/products/");
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const data = await response.json();
        // console.log(data);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts(); 

    // console.log(search);
    const filteredResults = products.filter(
      (item) =>
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [search, products]);

  return (
    <div className="App">
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={<Layout search={search} setSearch={setSearch} />}
            >
              <Route
                index
                element={
                  <Home categories={categories} products={products} />
                }
              ></Route>
              <Route path=":id/:id" element={<Product products={products} />} />
              <Route path="men">
                <Route
                  index
                  element={
                    <Categories
                      categories={["mens-shirts", "mens-shoes", "mens-watches"]}
                      products={products}
                    />
                  }
                />
                <Route
                  path=":id/:id"
                  element={<Product products={products} />}
                />
              </Route>

              <Route path="women">
                <Route
                  index
                  element={
                    <Categories
                      categories={[
                        "womens-dresses",
                        "womens-shoes",
                        "womens-watches",
                        "womens-bags",
                        "womens-jewellery",
                      ]}
                      products={products}
                    />
                  }
                />
                <Route
                  path=":id/:id"
                  element={<Product products={products} />}
                />
              </Route>

              <Route path="tech">
                <Route
                  index
                  element={
                    <Categories
                      categories={["automotive", "laptops", "smartphones"]}
                      products={products}
                    />
                  }
                />
                <Route
                  path=":id/:id"
                  element={<Product products={products} />}
                />
              </Route>

              <Route path="order-complete">
                <Route index element={<Thanks products={products} />} />
                <Route path=":id" element={<Product products={products} />} />
              </Route>

              <Route path="categories">
                <Route
                  index
                  element={
                    <Categories categories={categories} products={products} />
                  }
                />
                <Route path=":id" element={<Category products={products} />} />
                <Route
                  path=":id/:id"
                  element={<Product products={products} />}
                />
                <Route
                  path=":id/:id/:id"
                  element={<Product products={products} />}
                />
              </Route>


              <Route path="/cart" element={<Cart />} />

              <Route path="/search" element={<Search categories={categories} products={searchResults} />} />
              <Route path="*" element={<NotFound />} />

            </Route>
          </Routes>
        </Wrapper>
      <ScrollBtn />
    </div>
  );
}



export default ShopApp