import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../Icon/Icon";
import styles from "./Diary.module.css";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";
import { useParams } from "react-router-dom";
import { deleteReadingBooksId } from "../../redux/userReading/operations";

const Diary = () => {
  const book = useSelector(selectUserReadingBooks);
  const bookProgress = book?.progress || [];
  const totalPages = book?.totalPages || 1;
  const { id: bookId } = useParams();

  const dispatch = useDispatch();

  const formatDuration = (start, finish) => {
    const durationMs = new Date(finish) - new Date(start);
    const minutes = Math.round(durationMs / 60000);
    return isNaN(minutes) ? "0" : `${minutes} min`;
  };

  const calculatePercentage = (pagesRead) => {
    return ((pagesRead / totalPages) * 100).toFixed(1);
  };

  return (
    <div className={styles.diary_div}>
      <div className={styles.diary_grafic_div}>
        <ul className={styles.diary_list}>
          {Array.isArray(bookProgress) &&
            bookProgress
              .filter((item) => item.status === "inactive")
              .slice(0, 3)
              .map((item) => {
                const pagesRead = item.finishPage - item.startPage;
                const duration = formatDuration(
                  item.startReading,
                  item.finishReading
                );
                const percentage = calculatePercentage(pagesRead);
                const readingId = item._id;

                return (
                  <li key={item._id}>
                    <div className={styles.diary_icon_div}>
                      <Icon id="icon-diary-list" width="20" height="20" />
                      <p className={styles.diary_data}>
                        {new Date(item.finishReading).toLocaleDateString()}
                      </p>
                      <p className={styles.diary_pages}>{pagesRead} pages</p>
                    </div>
                    <div className={styles.diary_info_div}>
                      <div className={styles.diary_percentage_div}>
                        <p className={styles.diary_percentage}>{percentage}%</p>
                        <p className={styles.diary_duration}>{duration}</p>
                      </div>
                      <div className={styles.diary_speed_div}>
                        <Icon id="icon-graphic" width="59" height="25" />
                        <Icon
                          id="icon-trash-2"
                          width="14"
                          height="14"
                          onClick={() =>
                            dispatch(
                              deleteReadingBooksId({ bookId, readingId })
                            )
                          }
                          className={styles.diary_icon_delete}
                        />
                        <p className={styles.diary_speed}>
                          {item.speed} pages/hour
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default Diary;
