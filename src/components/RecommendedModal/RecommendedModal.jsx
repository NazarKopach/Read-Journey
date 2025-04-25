import ReactModal from "react-modal";
import styles from "./Recommended.module.css";
import { Icon } from "../Icon/Icon";

const RecommendedModal = ({
  modalIsOpen,
  closeModal,
  customStyles,
  img,
  author,
  title,
  totalPages,
  id,
}) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className={styles.recommended_modal_icon_close_div}>
        <Icon
          id="icon-x"
          width="28"
          height="28"
          onClick={closeModal}
          className={styles.recommended_modal_icon_close}
        />
      </div>

      <div key={id} className={styles.recommended_modal_div}>
        <img src={img} className={styles.recommended_modal_img} />
        <p className={styles.recommended_modal_title}>{title}</p>
        <p className={styles.recommended_modal_author}>{author}</p>
        <p className={styles.recommended_modal_total_page}>{totalPages}</p>
        <button className={styles.recommended_modal_button}>Add to</button>
      </div>
    </ReactModal>
  );
};

export default RecommendedModal;
