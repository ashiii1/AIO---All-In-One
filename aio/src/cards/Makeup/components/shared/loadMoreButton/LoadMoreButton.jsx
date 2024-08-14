import React from "react";
import styles from "./LoadMoreButton.module.css";

const LoadMoreButton = ({handleClick, isLoading}) => {
  return (
    <button className={styles.loadMore_btn} type="button" onClick={handleClick}>
      {isLoading ? 'Loading' : 'Load More'}
    </button>
  );
}

export default LoadMoreButton;