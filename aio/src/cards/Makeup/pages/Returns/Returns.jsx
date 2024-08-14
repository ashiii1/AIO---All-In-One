import React from "react";
import styles from "./Returns.module.css";
import { motion } from "framer-motion";
import Helmet from "../../components/shared/helmet/Helmet";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
import Accordion from "../../components/shared/accordion/Accordion";
import Container from "../../components/shared/contentContainer/Container";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  }
}

const Return = () => {
  return (
    <Helmet title={"Returns"}>
      <PageTitle title={"How to return"} />
      <section>
        <Container>
          <div className={styles.info}>
            <p className={styles.text}>If your purchase has not met your expectations, you can make a return.</p>
            <p className={styles.text}>You can see the conditions and the different options available for you to return your items.</p>
          </div>
          <div className={styles.info}>
            <p className={styles.text}>You must manage the return before the established <span className={styles.bold_text}>deadline:</span> </p>
            <p className={styles.text}><span className={styles.bold_text}>Online shopping:</span> you have <span className={styles.bold_text}>30 days</span> from the shipping date of your order.</p>
            <p className={styles.text}><span className={styles.bold_text}>Shop at a physical store</span>: you have <span className={styles.bold_text}>30 days</span> from the date of purchase.</p>
            <p className={styles.text}>Items must be in their original condition and include all labels.</p>
          </div>
          <motion.div className={styles.accordion}
            variants={variants}
            initial="hidden"
            animate="show"
          >
            <Accordion title={"RETURNS TO A STORE"}>
              <div>
                <p className={styles.text}>You can return your items for free at any of our stores</p>
                <p className={styles.text}><span className={styles.bold_text}>Cost</span>: FREE</p>
                <p className={styles.text}>You have 15 days to <span className={styles.bold_text}>collect the order in store</span>. You just need to present your QR code on your electronic receipt. If someone else goes instead, they must show an ID card.</p>
              </div>
            </Accordion>
            <Accordion title={"HOME COLLECTION"}>
              <div>
                <p className={styles.text}>We offer the option of returning your items using our home collection service. The cost of the return request is <span className={styles.bold_text}>40$</span>, which will be deducted from your refund.</p>
                <p className={styles.text}>You don't need to print any return label, the courier will bring it with them.</p>
                <p className={styles.text}>Bear in mind that this option is only available for online purchases.</p>
                <p className={styles.text}>It is not necessary to include a purchase receipt.</p>
              </div>
            </Accordion>
            <Accordion title={"DROP POINT RETURN"}>
              <div>
                <p className={styles.text}>You can return your items by dropping off your package at a drop point.</p>
                <p className={styles.text}>This return option is <span className={styles.bold_text}>free of charge</span>.</p>
                <p className={styles.text}>Once you have requested the return, we will send you an email with instructions for shipping and as many labels as boxes you are going to send.</p>
                <p className={styles.text}>You will be able to select the transport network you prefer to use and check all available delivery points. Please follow the instructions and drop off your return at the drop point of your choice.</p>
              </div>
            </Accordion>
          </motion.div>
          
        </Container>
        
      </section>
    </Helmet>
  );
}

export default Return;