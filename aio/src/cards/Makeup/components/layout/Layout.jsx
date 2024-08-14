import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { ScrollToTop } from "../shared/scrollToTop/scroll";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <ScrollToTop/>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;