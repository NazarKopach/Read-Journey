import ReactModal from "react-modal";
import styles from "./MyLibraryModal.module.css";
import { Icon } from "../Icon/Icon";
import { useDispatch } from "react-redux";
import { addRecommendedBooks } from "../../redux/recommendedBooks/operations";

const MyLibraryModal = ({
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
      <div className={styles.my_library_modal_icon_close_div}>
        <Icon
          id="icon-x"
          width="28"
          height="28"
          onClick={closeModal}
          className={styles.my_library_modal_icon_close}
        />
      </div>

      <li key={id} className={styles.my_library_modal_div}>
        <img src={img} className={styles.my_library_modal_img} />
        <p className={styles.my_library_modal_title}>{title}</p>
        <p className={styles.my_library_modal_author}>{author}</p>
        <p className={styles.my_library_modal_total_page}>{totalPages}</p>
        <button
          className={styles.my_library_modal_button}
          onClick={() => dispatch(addRecommendedBooks(id))}
        >
          Start reading
        </button>
      </li>
    </ReactModal>
  );
};

export default MyLibraryModal;
