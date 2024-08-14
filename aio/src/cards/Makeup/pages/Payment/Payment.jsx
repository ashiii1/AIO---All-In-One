import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Payment.module.css";
import payPal from "../../assets/images/paypal.png";
import { RiBankCardLine } from "@remixicon/react";
import { motion } from "framer-motion";
import Helmet from "../../components/shared/helmet/Helmet";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
import Container from "../../components/shared/contentContainer/Container";
import CreditCardForm from "../../components/shared/creditCardForm/CreditCardForm";
import DeliveryForm from "../../components/shared/deliveryForm/DeliveryForm";
import { cartActions } from "../../redux/slices/cartSlice";
import SuccessPayment from "../../components/shared/successPayment/SuccessPayment";

const Payment = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [selectedOption, setSelectedOption] = useState();
  const [shippingCharge, setShippingCharge] = useState("");
  const [viewDetails, setViewDetails] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [filledForm, setFilledForm] = useState(false);

  const products = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.cartTotalAmount);
  const deliveryInfo = JSON.parse(localStorage.getItem('deliveryInfo'));
  const dispatch = useDispatch();

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const onOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const viewDetailsHandler = () => {
    setViewDetails(!viewDetails);
  };

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

  useEffect(()=>{
    window.scrollTo({top: 0});
  },[success]);

  const handleFillForm = (values) => {
    const {cardNumber, name, expiryDate, cvv} = values;
    if(cardNumber !== "" && name !== "" && expiryDate !== "" && cvv !== "") {
      setFilledForm(true);
    }
  }

  const handlePay = () => {
    if (!selectedOption) {
      setError(true);
      return;
    }

    if(selectedOption === 'payPal') {
      setError(false);
      setSuccess(true);
      dispatch(cartActions.resetCart());
    }

    if(selectedOption === 'card' && filledForm) {
      setError(false);
      setSuccess(true);
      dispatch(cartActions.resetCart());
    }
  }

  return (
    <Helmet title='Payment'>
      <PageTitle title="Payment" />
      <section>
        <Container>
          {
            success ?
            <SuccessPayment selectedOption={selectedOption}/> :
            <div className={styles.payment_content}>
              <div className={styles.billing_info}>
                <h3 className={styles.title}>Your information</h3>
                <div className={styles.detail_box}>
                  <h4 className={styles.name}>{deliveryInfo.name}</h4>
                  <div className={styles.info_desc}>
                    <p className={styles.info_text}>{deliveryInfo.streetAddress},</p>
                    <p className={styles.info_text}>{deliveryInfo.postalCode},</p>
                    <p className={styles.info_text}>{deliveryInfo.city},</p>
                    <p className={styles.info_text}>{deliveryInfo.country}</p>
                  </div>
                  <div className={styles.info_desc}>
                    <p className={styles.info_text}>{deliveryInfo.email},</p>
                    <p className={styles.info_text}>{deliveryInfo.phone}</p>
                  </div>
                </div>
              </div>
              <div className={styles.delivery_info}>
                <h3 className={styles.title}>Delivery</h3>
                <div className={styles.detail_box}>
                      <div className={`${styles.input_wrapper} ${styles.input_checkbox}`}>
                        <input type="checkbox" id="address" checked={isChecked} onChange={checkHandler} />
                        <label htmlFor="address" className={styles.info_text}>Same address as above</label>
                      </div>
                      {isChecked ? null : (
                        <motion.div 
                          className={styles.detail_form} 
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <DeliveryForm checkHandler={checkHandler}/>
                        </motion.div>
                      )}
                </div>
              </div>
              <div className={styles.payment_info}>
                <h3 className={styles.title}>Payment</h3>
                <div className={styles.detail_box}>
                  <div className={styles.payment_item}>
                    <div className={styles.payment_itemName}>
                          <div className={styles.input_wrapper}>
                            <input type="radio" id="card" name="paymentOption" value="card" checked={selectedOption === "card"} onChange={onOptionChange}/>
                            <label className={styles.payment_title} htmlFor="card">Pay by Card</label>
                          </div>
                          <div className={styles.payment_img}><RiBankCardLine/></div>
                    </div>
                    {selectedOption === "card" && (
                      <motion.div
                        className={styles.payment_itemContent}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <CreditCardForm handleFillForm={handleFillForm}/>
                      </motion.div>
                    )}
                  </div>
                  <div className={styles.payment_item}>
                    <div className={styles.payment_itemName}>
                      <div className={styles.input_wrapper}>
                        <input type="radio" id="paypal" name="paymentOption" value="payPal" checked={selectedOption === "payPal"} onChange={onOptionChange} />
                        <label className={styles.payment_title} htmlFor="paypal">PayPal</label>
                      </div>
                      <div className={styles.payment_img}><img src={payPal} alt="payPal" /></div>
                    </div>
                    {selectedOption === "payPal" && (
                      <motion.div className={styles.payment_itemContent}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <p>When continuing, you will be asked to log in to your PayPal account. Review your payment and shipping details to complete your purchase. You will be redirected to the Order Confirmation page afterwards.</p>
                      </motion.div>
                    )}
                  </div>
                  {error && <span className={styles.error}>Please, choose payment option</span>}
                </div>
              </div>
              {
                viewDetails ? (
                  <motion.div className={styles.detail_box}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className={styles.detail_info}>
                      <h5 className={styles.subtitle}>Items</h5>
                      <p className={styles.detail_total}>{products.length} {products.length > 1 ? 'items' : 'item'}</p>
                    </div>
                    <div className={styles.detail_info}>
                      <h5 className={styles.subtitle}>Shipping</h5>
                      <p className={styles.detail_total}>{shippingCharge === 0 ? 'Free shipping' : '$'+ shippingCharge}</p>
                    </div>
                    <div className={`${styles.detail_info} ${styles.total}`}>
                      <h5 className={styles.subtitle}>TOTAL</h5>
                      <p className={styles.detail_total}>${totalAmount + shippingCharge}</p>
                    </div>
                  </motion.div>
                ) : null
              }
              <div className={styles.center_box}>
                <p className={styles.payment_total}>Total: <span className={styles.payment_details} onClick={viewDetailsHandler}>{viewDetails ? 'Hide details' : 'View details'}</span></p>
                <p className={styles.total_amount}>$ {totalAmount + shippingCharge}</p>
              </div>
              <div className={styles.center_box}>
                <button className={styles.pay_btn} type="button" onClick={handlePay}>Pay order</button>
              </div>
            </div>
          }
        </Container>
      </section>
    </Helmet>
    
  );
}

export default Payment;