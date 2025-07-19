import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = ({ closeModal, wrapperClass, linkClass }) => {
  const buildCssClasses = ({ isActive }) =>
    clsx(styles.link, linkClass, isActive && styles.active);
  return (
    <nav className={clsx(styles.nav_wrapper, wrapperClass)}>
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
