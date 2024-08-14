import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./SuccesPayment.module.css";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "@remixicon/react";
import ShopButton from "../shopButton/ShopButton";

const SuccessPayment = ({ selectedOption }) => {
  const [shippingCharge, setShippingCharge] = useState("");
  
  const totalAmount = useSelector(state => state.cart.cartTotalAmount);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(totalAmount)
    if (totalAmount <= 500) {
      setShippingCharge(30);
    } else if (totalAmount <= 1000) {
      setShippingCharge(25);
    } else if (totalAmount > 1001) {
      setShippingCharge(0);
    }
  }, [totalAmount]);

  return (
    <div className={styles.success_box}>
      <div className={`${styles.message_box} ${selectedOption === 'card' ? styles.success : styles.failed}`}>
        {
          selectedOption === "card" &&
            <>
              <RiCheckboxCircleFill size={50} fill={'#28a745'}/>
              <h2 className={styles.success_title}> Your payment was successful </h2>
              <div className={styles.details}>
                <p className={styles.details_title}> Payment Details: </p>
                <p className={styles.total}>Amount: <span className={styles.bold_text}>${totalAmount + shippingCharge}</span></p>
              </div>
              <p className={styles.success_text}>Thank you for choosing <span className={styles.bold_text}>Furni.com</span> </p>
              <p className={styles.success_text}>You will shortly receive a confirmation email.</p>
              <ShopButton text={"Back to shop"}/>
            </>
        }

        {
          selectedOption === "payPal" &&
          <>
            <RiCloseCircleFill size={50} fill={'#ef4444'}/>
            <h2 className={styles.success_title}> Your payment failed</h2>
            <p className={styles.success_text}>Try again later</p>
            <button type="button" className={styles.btn} onClick={() => navigate("/")}>Back to homepage</button>
          </>
        }
      </div>
    </div>
  )
};

export default SuccessPayment;