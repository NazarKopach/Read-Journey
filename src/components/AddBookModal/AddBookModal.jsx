import { Icon } from "../Icon/Icon";

import ReactModal from "react-modal";
import styles from "./AddBookModal.module.css";

const AddBookModal = ({ modalIsOpen, customStyles, closeModal }) => {
  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className={styles.finish_read_modal_icon_div}>
          <Icon id="icon-x" width="28" height="28" onClick={closeModal} />
        </div>
        <img
          src="/good.png"
          alt="icon god job"
          className={styles.finish_read_img}
        />
        <h2 className={styles.finish_read_title}>Good job</h2>
        <p className={styles.finish_read_info}>
          Your book is now in{" "}
          <span className={styles.finish_read_span}>the library! </span> The joy
          knows no bounds and now you can start your training
        </p>
      </ReactModal>
    </div>
  );
};

export default AddBookModal;
