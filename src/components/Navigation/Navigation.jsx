import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import clsx from "clsx";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const Navigation = ({ closeModal }) => {
  return (
    <nav className={styles.nav_wrapper}>
      <NavLink
        to="/recommended"
        className={buildCssClasses}
        onClick={closeModal}
      >
        Home
      </NavLink>
      <NavLink to="/library" className={buildCssClasses} onClick={closeModal}>
        My library
      </NavLink>
    </nav>
  );
};

export default Navigation;
