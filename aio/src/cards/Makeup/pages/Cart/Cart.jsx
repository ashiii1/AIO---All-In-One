import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../../components/shared/helmet/Helmet";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
import Container from "../../components/shared/contentContainer/Container";
import CartItem from "../../components/shared/cartItem/CartItem";
import emptyCart from "../../assets/images/emptyCart.png";
import { cartActions } from "../../redux/slices/cartSlice";

const Cart = () => {
  const products = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.cartTotalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shippingCharge, setShippingCharge] = useState("");

  useEffect(() => {
    dispatch(cartActions.getTotals());
  }, [products, dispatch]);

  useEffect(() => {
    if (totalAmount <= 500) {
      setShippingCharge(30);
    } else if (totalAmount <= 1000) {
      setShippingCharge(25);
    } else if (totalAmount > 1001) {
      setShippingCharge(0);
    }
  }, [totalAmount]);


  return (
    <Helmet title="Cart">
      <PageTitle title="Shopping Cart" />
      <section className={styles.cart_section}>
        <Container>
          <div>
            {products.length > 0 ? (
              <div className={styles.shopping_info}>
                <div>
                  <div className={styles.table_title}>
                    <h3 className={styles.grid_box}>Product</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Sub Total</h3>
                  </div>
                  <div className={styles.product_list}>
                    {products.map((item) => (
                      <CartItem item={item} key={item.id} />
                    ))}
                  </div>
                  <button type="button" className={styles.reset_btn} onClick={() => dispatch(cartActions.resetCart())}>Reset cart</button>
                </div>
                <div className={styles.coupon_box}>
                  <div className={styles.coupon_boxInput}>
                    <input type="text" placeholder="Coupon Number" />
                  </div>
                  <button type="button" className={styles.apply_btn}> Apply Coupon</button>
                </div>
                <div className={styles.totals}>
                  <div className={styles.totals_box}>
                    <h2 className={styles.title_totals}>Cart totals</h2>
                    <div>
                      <div className={styles.subtotal}>
                        <p className={styles.subtotal_text}>Subtotal</p>
                        <p className={styles.subtotal_amount}>${totalAmount}</p>
                      </div>
                      <div className={styles.subtotal}>
                        <p className={styles.subtotal_text}>Shipping Charge</p>
                        <p className={styles.subtotal_amount}>{shippingCharge === 0 ? 'Free shipping' : '$'+ shippingCharge}</p>
                      </div>
                      <div className={styles.subtotal}>
                        <p className={styles.subtotal_text}>Total</p> 
                        <p className={styles.subtotal_amount}>${totalAmount + shippingCharge}</p>
                      </div>
                    </div>
                    <div className={styles.subtotal_btn}>
                      <button type="button" className={styles.proceed_btn} onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={styles.empty_cartBox}
              >
                <div className={styles.empty_cartImg}>
                  <img src={emptyCart} alt="empty cart" />
                </div>
                <div className={styles.empty_cartText}>
                  <h2 className={styles.empty_cartTitle}>Your Cart feels lonely.</h2>
                  <p>Your Shopping cart lives to serve. Give it purpose - fill it and make it happy.</p>
                  <button type="button" className={styles.empty_cartBtn} onClick={() => navigate('/shop')}>Continue Shopping</button>
                </div>
              </motion.div>
            )}
          </div>
        </Container>
      </section>
    </Helmet>
  );
}

export default Cart;