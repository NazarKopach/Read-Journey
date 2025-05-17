import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";
import { useEffect, useState } from "react";
import { fetchReadingBooksId } from "../../redux/userReading/operations";
import { Icon } from "../Icon/Icon";
import Loader from "../Loader/Loader";
import { delRecommendedBooks } from "../../redux/recommendedBooks/operations";
import { useIsMobile } from "../../hooks/useIsMobile";

import FinishReadModal from "../FinishReadModal/FinishReadModal.jsx";
import styles from "./AddReading.module.css";

const AddReading = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const book = useSelector(selectUserReadingBooks);
  const isMobile = useIsMobile();

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(20, 20, 20, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid rgba(104, 104, 104, 0.2)",
      borderRadius: "12px",
      width: isMobile ? "335px" : "342px",
      height: isMobile ? "290px" : "308px",
      background: "#1f1f1f",
      overflow: "hidden",
    },
  };

  const [status, setStatus] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchReadingBooksId(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (book?.progress?.length > 0) {
      const lastProgress = book.progress[book.progress.length - 1];
      setStatus(lastProgress.status);
    }
  }, [book]);

  useEffect(() => {
    if (book.status === "done") {
      setIsOpen(true);
    }
  }, [book]);

  async function closeModal() {
    try {
      await dispatch(delRecommendedBooks(book._id)).unwrap();
      setIsOpen(false);
      navigate("/library");
    } catch (err) {
      console.error("Error:", err);
    }
  }

  return (
    <div className={styles.add_reading_div}>
      <h2 className={styles.add_reading_h2}>My reading</h2>
      {book ? (
        <div className={styles.add_readin_card_div}>
          <img
            className={styles.add_readin_img}
            src={book.imageUrl}
            alt={book.title}
          />
          <p className={styles.add_readin_title}>{book.title}</p>
          <p className={styles.add_readin_author}>{book.author}</p>
          <Icon
            id={status === "active" ? "icon-block-1" : "icon-block"}
            width="50"
            height="50"
            className={styles.add_readin_icon}
          />
        </div>
      ) : (
        <Loader />
      )}
      <FinishReadModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        customStyles={customStyles}
      />
    </div>
  );
};

export default AddReading;
