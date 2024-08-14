import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import { RiShoppingBagLine, RiMenuLine } from "@remixicon/react";
import Container from "../shared/contentContainer/Container";
import Logo from "../shared/logo/Logo";
import NavBar from "../shared/navBar/Nav";
import userIcon from "../../assets/images/user-icon.png"
import { authActions } from "../../redux/slices/authSlice";

const Header = () => {
  const [showUser, setShowUser] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const products = useSelector(state => state.cart.cartItems);
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    stickyHeader();

    return () => window.removeEventListener('scroll', stickyHeader);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active_menu');

  const navigateToCart = () => {
    navigate('/cart');
  };

  const Logout = () => {
    dispatch(authActions.logout());
    setShowUser(!showUser);
  }

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <div className={styles.header_nav}>
          <Logo />
          <div className={styles.menu} ref={menuRef} onClick={menuToggle}>
            <NavBar />
          </div>
          <div className={styles.header_icon}>
            <div>
              <span className={styles.cart_icon} onClick={navigateToCart}>
                <RiShoppingBagLine />
                <span className={styles.badge}>{products.length > 0 ? products.length : 0}</span>
              </span>
            </div>
            <div>
              <span className={styles.user_icon} onClick={() => setShowUser(!showUser)}>
                <motion.img whileTap={{scale: 1.2}} src={userIcon} alt="userIcon" />
              </span>
              {
                showUser && (
                  <motion.ul
                    className={styles.user_nav}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {
                      isLogged ? (
                        <>
                        <li className={styles.user_navItem}>
                            <span className={`${styles.user_navLink} ${styles.user_name}`}>{user.fullName}</span>
                          </li>
                          <li className={styles.user_navItem}>
                            <button className={styles.user_navLink} onClick={Logout}>Logout</button>
                          </li>
                          <li className={styles.user_navItem}>
                            <Link className={styles.user_navLink} to="#">Profile</Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className={styles.user_navItem}>
                            <Link className={styles.user_navLink} to="/signin">Login</Link>
                          </li>
                          <li className={styles.user_navItem}>
                            <Link className={styles.user_navLink} to="/signup">Sign Up</Link>
                          </li>
                        </>
                      )
                    }
                  </motion.ul>
                )
              }
            </div>
            <div className={styles.mobile_menu}>
              <span onClick={menuToggle}>
                <RiMenuLine />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;