import { Outlet, useParams } from "react-router-dom";
import { useRef } from "react";

import { useStateContext } from "../contexts/StateContext";
// import { ShopsNavbar } from "../components/navbar/ShopsNavbar";
import Cart from "../components/cart/Cart";
import SearchResultCount from "../components/search/SearchResultCount";
import Wishlist from "../components/wishlist/Wishlist";

export const ShopsLayout = () => {
  const { productid } = useParams();
  const { category } = useParams();

  const shopRef = useRef(null);

  const { showCart, foundItem, searchItem, productInfo } = useStateContext();
  const filteredCategory = productInfo.filter((productCategory) => {
    productCategory.url === category;
  });

  const filteredProduct = productInfo.filter(
    (product) => product.id === productid
  );
  // const [productItem, setProductItem] = useLocalStorage(
  //   "product-item",
  //   filteredProduct[0]
  // );
  console.log("product-item", filteredProduct[0]);
  console.log("filtered category", filteredCategory);
  return (
    // set relative positioning for the container if cart is Open
    <div ref={shopRef} className={`${showCart ? "relative" : " "}`}>
      <div className={`custom-containerr  bg-primary-white pt-10 `}>
        <SearchResultCount
          styleResult="lg:hidden text-primary-veryDarkGray mt-8"
          searchItem={searchItem}
          foundItem={foundItem}
        />
        <Cart />
        <Wishlist />

        <Outlet
          context={{
            filteredCategory: filteredCategory[0],
            filteredProduct: filteredProduct[0],
          }}
        />
      </div>
    </div>
  );
};
