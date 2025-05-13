import ReactModal from "react-modal";
import styles from "./FinishReadModal.module.css";
import { Icon } from "../Icon/Icon";

const FinishReadModal = ({ modalIsOpen, customStyles, closeModal }) => {
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
          src="/icon_finish_read.png"
          alt="icon quote"
          className={styles.finish_read_img}
        />
        <h2 className={styles.finish_read_title}>The book is read</h2>
        <p className={styles.finish_read_info}>
          It was an{" "}
          <span className={styles.finish_read_span}>exciting journey</span>,
          where each page revealed new horizons, and the characters became
          inseparable friends.
        </p>
      </ReactModal>
    </div>
  );
};

export default FinishReadModal;
