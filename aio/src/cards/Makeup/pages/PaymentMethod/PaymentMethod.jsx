import React from "react";
import styles from "./PaymentMethod.module.css";
import { motion } from "framer-motion";
import Helmet from "../../components/shared/helmet/Helmet";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
import Accordion from "../../components/shared/accordion/Accordion";
import Container from "../../components/shared/contentContainer/Container";
import VisaIcon from "../../assets/images/icon-payment-visa.png";
import MastercardIcon from "../../assets/images/icon-payment-mastercard.png";
import AmexIcon from "../../assets/images/icon-payment-amex.png";
import Paypal from "../../assets/images/paypal.png";
import ApplePay from "../../assets/images/icon-payment-apple_pay.png";
import GooglePay from "../../assets/images/icon-payment-google_pay.png";
import GiftCard from "../../assets/images/icon-payment-GiftCard.png";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  }
}

const PaymentMethods = () => {
  return (
    <Helmet title={"Payment Methods"}>
      <PageTitle title={"Payment methods"} />
      <section>
        <Container>
          <div className={styles.info}>
            <p className={styles.text}>At Furni.com, we accept the following payment methods: When processing purchases, we will show you the options available for your order.</p>
          </div>
          <motion.div className={styles.accordion}
            variants={variants}
            initial="hidden"
            animate="show"
          >
            <Accordion title={"PAYMENT OPTIONS"}>
              <ul className={styles.payment_methods}>
                <li className={styles.payment_item}>
                  <img src={VisaIcon} alt="visa" />
                  <h5 className={styles.payment_name}>VISA</h5>
                </li>
                <li className={styles.payment_item}>
                  <img src={MastercardIcon} alt="mastercard" />
                  <h5 className={styles.payment_name}>MASTERCARD</h5>
                </li>
                <li className={styles.payment_item}>
                  <img src={AmexIcon} alt="amex" />
                  <h5 className={styles.payment_name}>AMERICAN EXPRESS</h5>
                </li>
                <li className={styles.payment_item}>
                  <img src={Paypal} alt="paypal" />
                  <h5 className={styles.payment_name}>PAYPAL</h5>
                </li>
                <li className={styles.payment_item}>
                  <img src={ApplePay} alt="apple pay" />
                  <h5 className={styles.payment_name}>APPLE PAY</h5>
                </li>
                <li className={styles.payment_item}>
                  <img src={GooglePay} alt="google pay" />
                  <h5 className={styles.payment_name}>GOOGLE PAY</h5>
                </li>
                <li className={styles.payment_item}>
                  <img src={GiftCard} alt="gift card" />
                  <h5 className={styles.payment_name}>GIFT CARD</h5>
                </li>
              </ul>
            </Accordion>
          </motion.div>
        </Container>
      </section>
    </Helmet>
  );
}

export default PaymentMethods;