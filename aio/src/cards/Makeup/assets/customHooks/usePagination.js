import React, { useState } from "react";

function usePagination(items) {
  //const [pageNumber, setPageNumber] = useState(0);
  //const pageCount = Math.ceil(items.length / pageLimit);

  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  console.log(itemsPerPage, indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const changePage = (pN) => {
    setCurrentPage(pN);
  };

  const pageData = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    items.slice(indexOfFirstItem, indexOfLastItem);
    console.log(items);
    return items;
  };

  const selectItemsPerPage = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return {
    currentPage,
    totalPages,
    changePage,
    selectItemsPerPage,
    pageData,
    itemsPerPage,
    indexOfFirstItem,
    indexOfLastItem,
  };
}

export default usePagination;
