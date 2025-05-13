import { useDispatch, useSelector } from "react-redux";
import styles from "./AddReading.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";
import { useEffect, useState } from "react";
import { fetchReadingBooksId } from "../../redux/userReading/operations";
import { Icon } from "../Icon/Icon";
import Loader from "../Loader/Loader";
import FinishReadModal from "../FinishReadModal/FinishReadModal";
import { delRecommendedBooks } from "../../redux/recommendedBooks/operations";
import { useReadingStats } from "../../hooks/useReadingStats";

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
    width: "342px",
    height: "308px",
    background: "#1f1f1f",
    overflow: "hidden",
  },
};

const AddReading = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const items = useSelector(selectUserReadingBooks);
  const [status, setStatus] = useState("");
  const book = useSelector(selectUserReadingBooks);
  const { percentage } = useReadingStats(book);

  useEffect(() => {
    dispatch(fetchReadingBooksId(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (items?.progress?.length > 0) {
      const lastProgress = items.progress[items.progress.length - 1];
      setStatus(lastProgress.status);
    }
  }, [items]);

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (percentage === 100 && !modalIsOpen) {
      setIsOpen(true);
    }
  }, [percentage]);

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
      {items ? (
        <div className={styles.add_readin_card_div}>
          <img
            className={styles.add_readin_img}
            src={items.imageUrl}
            alt={items.title}
          />
          <p className={styles.add_readin_title}>{items.title}</p>
          <p className={styles.add_readin_author}>{items.author}</p>
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
