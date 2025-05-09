import ReactModal from "react-modal";
import styles from "./MyLibraryModal.module.css";
import { Icon } from "../Icon/Icon";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleStartReading = () => {
    try {
      closeModal();
      navigate(`/reading/${id}`);
    } catch (error) {
      console.error("Failed to start reading:", error);
    }
  };

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

      <li className={styles.my_library_modal_div}>
        <img src={img} className={styles.my_library_modal_img} />
        <p className={styles.my_library_modal_title}>{title}</p>
        <p className={styles.my_library_modal_author}>{author}</p>
        <p className={styles.my_library_modal_total_page}>{totalPages}</p>
        <button
          className={styles.my_library_modal_button}
          onClick={handleStartReading}
        >
          Start reading
        </button>
      </li>
    </ReactModal>
  );
};

export default MyLibraryModal;
