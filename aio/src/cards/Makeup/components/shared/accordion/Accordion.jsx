import React, { useState}  from "react";
import { motion } from "framer-motion";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import styles from "./Accordion.module.css";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion_item} >
      <div className={styles.accordion_title} onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <span className={styles.accordion_icon}>{isActive ? <RiArrowUpSLine/>: <RiArrowDownSLine/>}</span>
      </div>
      {isActive && <motion.div className={styles.accordion_content} variants={variants}>{children}</motion.div>}
    </div>
  );
}

export default Accordion;

