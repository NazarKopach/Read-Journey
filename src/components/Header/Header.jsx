import { useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";

import UserMenu from "../UserMenu/UserMenu";

import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

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
      <div className={styles.header_link_div}>
        <Navigation />
      </div>
      <UserMenu />
    </div>
  );
};

export default Header;
