import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"
import { navBarList } from "../../../data/navBar"

const NavBar = () => {
  return (
    <ul className={styles.navigation}>
      {navBarList.map((item) => (
        <li className={styles.navigation_link} key={item.id}>
          <NavLink to={item.link} className={(navClass) => navClass.isActive ? styles.active : ''}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;