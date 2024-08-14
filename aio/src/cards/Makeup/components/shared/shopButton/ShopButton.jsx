import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShopButton.module.css";

const ShopButton = ({text}) => {
  return (
    <Link to='/shop'>
      <button className={styles.shop_btn} type="button">
        {text}
      </button>
    </Link>
  );
}

export default ShopButton;