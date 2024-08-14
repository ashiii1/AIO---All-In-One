import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <Link to='/'>
      <div className={styles.logo}>
        <h2 className={styles.logo_title}>Furni</h2>
        <span className={styles.logo_subtitle}>.com</span>
      </div>
    </Link>
  );
}

export default Logo;