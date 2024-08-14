import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Footer.module.css"
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramFill } from "@remixicon/react";
import Container from "../shared/contentContainer/Container";
import Logo from "../shared/logo/Logo";
import paymentCard from "../../assets/images/payment.png"

const Footer = () => {
  const year = new Date().getFullYear();
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_box}>
          <div className={styles.footer_logoBox}>
            <Logo />
            <p className={styles.footer_text}>One of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
            <ul className={styles.social_links}>
              <li className={styles.social_link}>
                <Link to="https://github.com/SvitlanaFediai" target="_blank">
                  <RiGithubFill/>
                </Link>
              </li>
              <li className={styles.social_link}>
                <Link to="https://www.linkedin.com/in/svitlana-fediai-a95061210" target="_blank">
                  <RiLinkedinBoxFill/>
                </Link>
              </li>
              <li className={styles.social_link}>
                <Link to="https://instagram.com/svitlanka_fd" target="_blank">
                  <RiInstagramFill/>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Customer service</h3>
            <ul className={styles.quick_links}>
              <li className={styles.quick_link}>
                <Link to='/delivery'>
                  Delivery
                </Link>
              </li>
              <li className={styles.quick_link}>
                <Link to='/paymentMethod'>
                  Payment
                </Link>
              </li>
              <li className={styles.quick_link}>
                <Link to='/return'>
                  Return & refund
                </Link>
              </li>
              <li className={styles.quick_link}>
                <Link to='#'>
                  Terms & conditions
                </Link>
              </li>
              <li className={styles.quick_link}>
                <Link to='#'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Your Account</h3>
            <ul className={styles.quick_links}>
              <li className={styles.quick_link}>
                <Link to='#'>Profile</Link>
              </li>
              <li className={styles.quick_link}>
                <Link to='#'>Orders</Link>
              </li>
              <li className={styles.quick_link}>
                <Link to='#'>Addresses</Link>
              </li>
              <li className={styles.quick_link}>
                <Link to='#'>Account Details</Link>
              </li>
            </ul>
          </div>
          <div className={styles.subscribe}>
            <h3>Subscribe to our newsletter.</h3>
            <p className={styles.footer_text}>Subscribe to our newsletter inorder to the first to recieve news about our amazing deals and offers.</p>
            <div>
              {subscription ? (
                <motion.p 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={styles.success}
                > Subscribed Successfully !</motion.p>
              ) : (
                <div className={styles.subscribe_inputBox}>
                  <div>
                    <input type="text" className={styles.subscribe_input} onChange={(e) => setEmailInfo(e.target.value)} value={emailInfo} placeholder="Insert your email ..."/>
                    {errMsg && (
                      <p className={styles.error}>
                        {errMsg}
                      </p>
                    )}
                  </div>
                  <button type="button" className={styles.subscribe_btn} onClick={handleSubscription}>Subscribe</button>
                </div>
              )}
              <img src={paymentCard} alt="payment" />
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.rights}>
        <Container>
          <p> © Copyright {year} | Furni.com shopping | All Rights Reserved</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;