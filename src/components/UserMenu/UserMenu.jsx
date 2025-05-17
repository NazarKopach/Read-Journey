import { useDispatch, useSelector } from "react-redux";
import { apiLogoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useState } from "react";
import { Icon } from "../Icon/Icon";

import styles from "./UserMenu.module.css";
import MobileModal from "../MobileModal/MobileModal.jsx";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(20, 20, 20, 0.6)",
  },
  content: {
    top: "0",
    left: "auto",
    right: "0",
    bottom: "0",
    width: "50vw",
    height: "100vh",
    padding: "34px",
    border: "none",
    borderRadius: "0",
    backgroundColor: "#262626",
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onLogout = () => {
    dispatch(apiLogoutUser());
    closeModal();
  };

  return (
    <div className={styles.user_menu_div}>
      <div className={styles.user_menu_icon_div}>
        <Icon
          id="icon-Ellipse-1"
          width="40"
          height="40"
          className={styles.user_menu_icon}
        />
        <span className={styles.user_menu_span_icon}>
          {user?.name?.charAt(0).toUpperCase() || "G"}
        </span>
      </div>
      <span className={styles.user_menu_span}>{user?.name || "Guest"}</span>
      <button className={styles.button_user} type="button" onClick={onLogout}>
        Logout
      </button>
      <Icon
        id="icon-menu-04"
        width="40"
        height="40"
        className={styles.user_menu_icon_burger}
        onClick={openModal}
      />
      <MobileModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        customStyles={customStyles}
      />
    </div>
  );
};

export default UserMenu;
