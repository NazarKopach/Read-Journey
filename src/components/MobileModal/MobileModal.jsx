import ReactModal from "react-modal";
import { Icon } from "../Icon/Icon";
import styles from "./MobileModal.module.css";

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

const MobileModal = ({ modalIsOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <Icon
        id="icon-x"
        width="28"
        height="28"
        onClick={closeModal}
        className={styles.mobile_modal_close_icon}
      />
    </ReactModal>
  );
};

export default MobileModal;
