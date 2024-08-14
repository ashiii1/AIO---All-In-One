import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import { RiCloseLine, RiAddLine, RiSubtractLine } from "@remixicon/react";
import { cartActions } from "../../../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_left}>
        <span className={styles.cart_delIcon} onClick={deleteItem}><RiCloseLine/></span>
        <img className={styles.cart_img} src={item.imgUrl} alt={item.productName} />
        <h3 className={styles.cart_itemName}>{item.productName}</h3>
      </div>
      <div className={styles.cart_right}>
        <p className={styles.cart_itemPrice}>${item.price}</p>
        <div className={styles.cart_itemQuantity}>
          <span className={styles.cart_icon} onClick={() => dispatch(cartActions.decreaseQuantity(item.id))}><RiSubtractLine/></span>
          <p className={styles.cart_quantity}>{item.quantity}</p>
          <span className={styles.cart_icon} onClick={() => dispatch(cartActions.increaseQuantity(item.id))}><RiAddLine/></span>
        </div>
        <div className={styles.cart_itemSubtotal}>
          <p className={styles.cart_subtotal}>${item.quantity * item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;