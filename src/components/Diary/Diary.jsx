import { useSelector } from "react-redux";
import { Icon } from "../Icon/Icon";
import styles from "./Diary.module.css";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";

const Diary = () => {
  const book = useSelector(selectUserReadingBooks);
  const bookProgress = book?.progress || [];

  return (
    <div className={styles.diary_div}>
      <div className={styles.diary_title_div}>
        <h2 className={styles.diary_title}>Diary</h2>
        <div>
          <Icon
            className={styles.diary_icon}
            id="icon-hourglass-01"
            width="20"
            height="20"
          />
          <Icon
            className={styles.diary_icon}
            id="icon-pie-chart-02"
            width="20"
            height="20"
          />
        </div>
      </div>
      <div className={styles.diary_grafic_div}>
        <ul className={styles.diary_list}>
          {Array.isArray(bookProgress) &&
            bookProgress.slice(0, 1).map((item) => (
              <li key={item._id}>
                <div className={styles.diary_icon_div}>
                  <Icon id="icon-diary-list" width="20" height="20" />
                  <p className={styles.diary_data}>
                    {new Date(item.finishReading).toLocaleDateString()}
                  </p>
                  <p className={styles.diary_pages}>
                    {item.finishPage - item.startPage} pages
                  </p>
                </div>
                <p></p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Diary;
