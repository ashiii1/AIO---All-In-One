import React from "react";
import styles from "./Badge.module.css";

const Badge = ({ text }) => {
  return (
    <div className={styles.badge}>
      {text}
    </div>
  );
};

export default Badge;