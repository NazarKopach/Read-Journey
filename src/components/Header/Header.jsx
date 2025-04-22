import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";

import UserMenu from "../UserMenu/UserMenu";

import styles from "./Header.module.css";
import clsx from "clsx";
const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const Header = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (e) => setIsTablet(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className={styles.header_div}>
      {isTablet ? (
        <Icon id="icon-Logo-mobile" width="42" height="17" />
      ) : (
        <Icon id="icon-Logo-2" width="182" height="17" />
      )}
      <nav className={styles.header_link_div}>
        <NavLink to="/recommended" className={buildCssClasses}>
          Home
        </NavLink>
        <NavLink to="/library" className={buildCssClasses}>
          My library
        </NavLink>
      </nav>
      <UserMenu />
    </div>
  );
};

export default Header;
