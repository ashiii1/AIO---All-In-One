import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { toast } from 'react-toastify';
import { motion } from "framer-motion";
import { RiAddLine } from "@remixicon/react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/slices/cartSlice"
import Badge from "../badge/Badge";

const ProductCard = ({item, badge}) => {
  const dispatch = useDispatch();

  const addProductToCard = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl
      })
    )

    toast.success("Product added successfully!");
  }

  return (
    <div className={styles.product_item}>
      <Link to={`/shop/${item.id}`}>
        <div className={styles.product_img}>
          <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt={item.productName} />
        </div>
      </Link>
      {
        badge && 
                <div className={styles.badge_box}><Badge text={'New'} /></div>
      }
      <div className={styles.product_info}>
        <div>
          <h3 className={styles.product_name}>{item.productName}</h3>
          <span className={styles.product_category}>{item.category}</span>
        </div>
        <div className={styles.product_bottom}>
          <span className={styles.product_price}>$ {item.price} </span>
          <motion.span whileTap={{scale: 1.2}} className={styles.product_add} onClick={addProductToCard}><RiAddLine/></motion.span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;