import { useDispatch, useSelector } from "react-redux";
import styles from "./AddReading.module.css";
import { useParams } from "react-router-dom";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";
import { useEffect, useState } from "react";
import { fetchReadingBooksId } from "../../redux/userReading/operations";
import { Icon } from "../Icon/Icon";
import Loader from "../Loader/Loader";

const AddReading = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const items = useSelector(selectUserReadingBooks);
  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(fetchReadingBooksId(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (items?.progress?.length > 0) {
      const lastProgress = items.progress[items.progress.length - 1];
      setStatus(lastProgress.status);
    }
  }, [items]);

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
    </div>
  );
};

export default AddReading;
