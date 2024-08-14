import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ items, currentPage, totalPages, onPageChange, indexOfFirstItem, indexOfLastItem }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={() => onPageChange(number)}
        className={`${styles.pagination_item} ${currentPage === number ? styles.active : ''}`}
      >
        {number}
      </li>
    );
  });

  return (
    <div className={styles.pagination}>
      <ul className={styles.pagination_list}>
        {renderPageNumbers}
      </ul>
      <p className={styles.pagination_text}>Products from {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, items.length)} of{" "} {items.length}</p>
    </div>
  )
}

export default Pagination;