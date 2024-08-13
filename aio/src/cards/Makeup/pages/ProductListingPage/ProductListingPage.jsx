import React from "react";
import { useContext, useEffect } from "react";
import { useRef } from "react";
import { Sidebar, ProductCard, Searchbar } from "../../components/index";
import { StateContext } from "../../Context";
import {
  getFilteredData,
  getPriceRangedData,
  getRatingSortedData,
  getSortedData,
} from "../../Services/utilityFunctions";
import "./ProductListingPage.css";
import { useMediaQuery } from "react-responsive";

const ProductListingPage = () => {
  const topContainer = useRef();
  const { state, dispatch } = useContext(StateContext);
  const sortedData = getSortedData(state.products, state.sortBy);
  const priceRangedData = getPriceRangedData(sortedData, state.priceRange);
  const ratingSortedData = getRatingSortedData(priceRangedData, state.rating);
  const filteredData = getFilteredData(ratingSortedData, state, dispatch);
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  return (
    <>
      <div ref={topContainer} />
      <div class="product-page-container">
        <Sidebar />
        <div
          class={
            state.showSidebarForMobile
              ? "product-display-container-mb"
              : "product-display-container"
          }
        >
          {filteredData.length === 0 ? (
            <>
              {" "}
              <h2 class="sub-heading">No products found!</h2>
            </>
          ) : (
            <>
              {isMobile && <Searchbar />}{" "}
              <h2 class="sub-heading">Showing all Products</h2>
              <div class="product-container">
                {filteredData.map((item) => (
                  <ProductCard item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {isMobile && (
        <>
          <div className="filter-and-clear-bar flex-hz jc-sa">
            <p
              className="text-md filter-text"
              onClick={() =>
                dispatch({
                  type: "SET_SHOW_SIDEBAR_FOR_MOBILE",
                  payload: !state.showSidebarForMobile,
                })
              }
            >
              Filters
            </p>
            <p
              className="text-md clear-filter-text"
              onClick={(e) => dispatch({ type: "CLEAR_ALL_FILTERS" })}
            >
              Clear
            </p>
          </div>
        </>
      )}
    </>
  );
};

export { ProductListingPage };
