import React, { useState, useEffect } from "react";
import styles from "./Bestsellers.module.css";
import products from "../../../data/products";
import Container from "../contentContainer/Container";
import ProductList from "../productList/ProductList";
import LoadMoreButton from "../loadMoreButton/LoadMoreButton";

const productsPerPage = 4;

const Bestsellers = () => {
  const bestsellers = products.filter(item => item.bestseller === true);
  const [displayedData, setDisplayedData] = useState([]);
  const [next, setNext] = useState(productsPerPage);
  const [isLoading, setIsLoading] = useState(false);

  const arraySlice = (start, end) => {
    const slicedPosts = bestsellers.slice(start, end);
    setDisplayedData(slicedPosts);
  };

  useEffect(() => {
    arraySlice(0, productsPerPage);
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    arraySlice(0, next + productsPerPage);
    setNext(next + productsPerPage);
    setIsLoading(false);
  }

  return (
    <section className={styles.bestsellers_section}>
      <Container>
        <h2 className="section_title">Our Bestsellers</h2>
        <ProductList data={displayedData} />
        { next < bestsellers?.length && <LoadMoreButton handleClick={handleLoadMore} isLoading={isLoading} /> }
      </Container>
    </section>
  );
}

export default Bestsellers;