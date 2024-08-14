import React from "react";
import styles from "./Delivery.module.css";
import { motion } from "framer-motion";
import Helmet from "../../components/shared/helmet/Helmet";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
import Accordion from "../../components/shared/accordion/Accordion";
import Container from "../../components/shared/contentContainer/Container";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  }
}

const Delivery = () => {
  return (
    <Helmet title={"Delivery"}>
      <PageTitle title={"Delivery methods, Times and Costs"} />
      <section>
        <Container>
          <div className={styles.info}>
            <p className={styles.text}>Shipping options may vary depending on the delivery address, what time you place your order and item availability.</p>
            <p className={styles.text}>When you process your order, we will show you the <span className={styles.bold_text}>shipping methods</span> available, the <span className={styles.bold_text}>cost</span> and the estimated <span className={styles.bold_text}>delivery date</span>.</p>
            <p className={styles.text}>Please note that deliveries are only made on working days.</p>
            <p className={styles.text}>Please remember that the shipping address of your order must be in the same market/region as where you made the purchase.</p>
          </div>
          <motion.div className={styles.accordion}
            variants={variants}
            initial="hidden"
            animate="show"
          >
            <Accordion title={"SHIPPING TO A STORE"}>
              <div>
                <p className={styles.text}><span className={styles.bold_text}>Deadline</span>: 2-3 working days</p>
                <p className={styles.text}><span className={styles.bold_text}>Cost</span>: FREE</p>
                <p className={styles.text}>During your order, we will tell you the <span className={styles.bold_text}>available stores</span> and the <span className={styles.bold_text}>estimated delivery date</span>.</p>
                <p className={styles.text}>You have 15 days to <span className={styles.bold_text}>collect the order in store</span>. You just need to present your QR code on your electronic receipt. If someone else goes instead, they must show an ID card.</p>
              </div>
            </Accordion>
            <Accordion title={"HOME DELIVERY"}>
              <div>
                <p className={styles.text}><span className={styles.bold_text}>Next day delivery guaranteed</span> - 30 $</p>
                <p className={styles.text}><span className={styles.bold_text}>Delivery in 2-3 working days</span> - 25 $. Shipping will be <span className={styles.bold_text}>free</span> if your order includes non-discounted items worth over 1001 $.</p>
                <p className={styles.text}><span className={styles.bold_text}>Same day delivery</span> - 40 $. Same day delivery for all orders placed between Monday and Friday before 14:00.</p>
                <p className={styles.text}>If you have purchased as a registered user, you can modify the delivery address by accessing your order details in <Link className={styles.link} to={'/login'}>your account</Link>; if and when the order status allows to do so.</p>
              </div>
            </Accordion>
            <Accordion title={"DROP POINT DELIVERY"}>
              <div>
                <p className={styles.text}><span className={styles.bold_text}>Deadline</span>: 2-3 working days</p>
                <p className={styles.text}><span className={styles.bold_text}>Cost</span>: 30 $. Shipping will be <span className={styles.bold_text}>free</span> if your order includes non-discounted items worth over 1001 $.</p>
                <p className={styles.text}>When you complete the purchase, we will show you the <span className={styles.bold_text}>drop points available</span> and the <span className={styles.bold_text}>estimated date</span> you will receive your order.</p>
                <p className={styles.text}>We will inform you when your order is ready at the selected drop point. Remember, you must show identification to collect it. If another person goes in your place, they must present written authorisation and a copy of your identity document.</p>
              </div>
            </Accordion>
          </motion.div>
          
        </Container>
        
      </section>
    </Helmet>
  );
}

export default Delivery;