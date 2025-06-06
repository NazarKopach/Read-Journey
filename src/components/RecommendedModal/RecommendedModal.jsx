import { Icon } from "../Icon/Icon";
import { useDispatch } from "react-redux";
import { addRecommendedBooks } from "../../redux/recommendedBooks/operations";

import ReactModal from "react-modal";
import styles from "./Recommended.module.css";

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
  const dispatch = useDispatch();

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

      <li className={styles.recommended_modal_div}>
        <img src={img} className={styles.recommended_modal_img} />
        <p className={styles.recommended_modal_title}>{title}</p>
        <p className={styles.recommended_modal_author}>{author}</p>
        <p className={styles.recommended_modal_total_page}>{totalPages}</p>
        <button
          className={styles.recommended_modal_button}
          onClick={async () => {
            await dispatch(addRecommendedBooks(id)).unwrap();
            closeModal();
          }}
        >
          Add to
        </button>
      </li>
    </ReactModal>
  );
};

export default RecommendedModal;
