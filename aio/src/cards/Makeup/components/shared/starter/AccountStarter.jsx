import { Link } from "react-router-dom";
import { RiCheckboxCircleFill } from "@remixicon/react";
import styles from "./AccountStarter.module.css";

const AccountStarter = ({title, text}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to='/'>
          <div className={styles.logo}>
            <h2 className={styles.logo_title}>Furni</h2>
            <span className={styles.logo_subtitle}>.com</span>
          </div>
        </Link>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.list_box}>
          <span className={styles.list_boxSpan}><RiCheckboxCircleFill/></span>
          <div>
            <h4 className={styles.subtitle}>Get started fast with FURNI.com</h4>
            <p className={styles.list_boxText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!</p>
          </div>
        </div>
        <div className={styles.list_box}>
          <span className={styles.list_boxSpan}><RiCheckboxCircleFill/></span>
          <div>
            <h4 className={styles.subtitle}>Access all FURNI.com services</h4>
            <p className={styles.list_boxText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!</p>
          </div>
        </div>
        <div className={styles.list_box}>
          <span className={styles.list_boxSpan}><RiCheckboxCircleFill/></span>
          <div>
            <h4 className={styles.subtitle}>Trusted by online Shoppers</h4>
            <p className={styles.list_boxText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!</p>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.list_item}>
            <Link to='/'>
              <p>© FURNI.com</p>
            </Link>
          </div>
          <div className={styles.list_item}>
            <Link to="#">Terms</Link>
          </div>
          <div className={styles.list_item}>
            <Link to="#">Privacy</Link>
          </div>
          <div className={styles.list_item}>
            <Link to="#">Security</Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default AccountStarter;