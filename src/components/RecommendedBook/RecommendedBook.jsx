import { Icon } from "../Icon/Icon";
import RecommendedList from "../RecommendedList/RecommendedList";
import styles from "./RecommendedBook.module.css";

const RecommendedBook = () => {
  return (
    <div className={styles.recommended_book_div}>
      <div className={styles.recommended_book_title_icon_div}>
        <h2 className={styles.recommended_book_title}>Recommended</h2>
        <div>
          <Icon
            id="icon-Frame-33"
            width="40"
            height="40"
            className={styles.recommended_book_icon}
          />
          <Icon
            id="icon-Frame-34"
            width="40"
            height="40"
            onClick={() => {
              page + 10;
            }}
          />
        </div>
      </div>
      <RecommendedList />
    </div>
  );
};

export default RecommendedBook;
