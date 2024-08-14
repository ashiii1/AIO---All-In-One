import React, { useState, useEffect } from "react";
import styles from "./Shop.module.css";
import Helmet from "../../components/shared/helmet/Helmet";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
import Container from "../../components/shared/contentContainer/Container";
import { RiSearchLine } from "@remixicon/react";
import products from "../../data/products";
import ProductList from "../../components/shared/productList/ProductList";
import Pagination from "../../components/shared/pagination/Pagination";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsData.slice(indexOfFirstItem, indexOfLastItem);

  const handleFilter = e => {
    const filterValue = e.target.value;

    if(filterValue === 'chair') {
      const filteredProducts = products.filter((item) => item.category === "Chair");

      setProductsData(filteredProducts)
    }
    if(filterValue === 'armChair') {
      const filteredProducts = products.filter((item) => item.category === "Arm chair");

      setProductsData(filteredProducts)
    }
    if(filterValue === 'singleSofa') {
      const filteredProducts = products.filter((item) => item.category === "Single Sofa");

      setProductsData(filteredProducts)
    }
    if(filterValue === 'doubleSofa') {
      const filteredProducts = products.filter((item) => item.category === "Double sofa");

      setProductsData(filteredProducts)
    }

  }

  const handleSearch = e => {
    const searctValue = e.target.value;
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searctValue.toLowerCase()));

    setProductsData(searchedProducts);
  }

  const selectItemsPerPage = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(1);
  }

  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(()=>{
    window.scrollTo({top: 0});
  },[currentPage]);

  return (
    <Helmet title="Shop">
      <PageTitle title="Products" />
      <section className={styles.filter_section}>
        <Container>
          <div className={styles.filter_sectionBox}>
            <div className={styles.filter_widget}>
              <select name="filter" id="" onChange={handleFilter}>
                <option >Filter by Category</option>
                <option value="chair">Chair</option>
                <option value="armChair">Arm chair</option>
                <option value="singleSofa">Single sofa</option>
                <option value="doubleSofa">Double sofa</option>
              </select>
            </div>
            <div className={styles.filter_widget}>
              <select name="sort" id="">
                <option >Sort by</option>
                <option value="bestsellers">Bestsellers</option>
                <option value="new">New arrivals</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
            <div className={styles.filter_widget}>
              <label>Show:</label>
              <select name="show" value={itemsPerPage} id="" onChange={selectItemsPerPage}>
                <option value={8}>8</option>
                <option value={12}>12</option>
                <option value={16}>16</option>
                <option value={20}>20</option>
                <option value={24}>24</option>
              </select>
            </div>
            <div className={styles.filter_inputBox}>
              <input type="text" placeholder="Search..." onChange={handleSearch} />
              <span><RiSearchLine/></span>
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.result_section}>
        <Container>
          { productsData.length === 0 
            ?
            (<h2 className={styles.result_text}>Oops...No products are found</h2>)
            :
            (
              <>
                <ProductList data={currentItems}/>
                <Pagination items={productsData} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} indexOfFirstItem={indexOfFirstItem} indexOfLastItem={indexOfLastItem}/>
              </>
            )
          }
        </Container>
      </section>
    </Helmet>
  );
}

export default Shop;