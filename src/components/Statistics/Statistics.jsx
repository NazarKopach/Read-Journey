import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./Statistics.module.css";
import { useSelector } from "react-redux";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";

const Statistics = () => {
  const book = useSelector(selectUserReadingBooks);
  const bookProgress = book?.progress || [];
  const totalPages = book?.totalPages || 1;

  const calculatePercentage = (pagesRead) => {
    return parseFloat(((pagesRead / totalPages) * 100).toFixed(1));
  };

  const totalPagesRead = bookProgress.reduce((acc, item) => {
    const pages = item.finishPage - item.startPage;
    return acc + pages;
  }, 0);

  const safePagesRead = Math.min(totalPagesRead, totalPages);
  const percentage = calculatePercentage(safePagesRead);
  const readSpeed =
    bookProgress.length > 0 ? bookProgress[bookProgress.length - 1].speed : 0;

  return (
    <div className={styles.statistics_div}>
      <p className={styles.statistics_p}>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>

      <div className={styles.statistics_graphic_div}>
        <div className={styles.statistics_progressbar}>
          <CircularProgressbar
            value={!isNaN(percentage) ? percentage : 0}
            text={!isNaN(percentage) ? `${percentage}%` : "0%"}
            styles={buildStyles({
              pathColor: "#22c55e",
              textColor: "rgb(252 255 253)",
              trailColor: "#1f1f1f",
            })}
          />
        </div>

        <p className={styles.statistics_speed}>
          {!isNaN(readSpeed) ? `${readSpeed} per hour` : "Reading..."}
        </p>
        <p className={styles.statistics_total_pages}>
          {!isNaN(totalPagesRead)
            ? `${totalPagesRead} total pages`
            : "Process of reading..."}
        </p>
      </div>
    </div>
  );
};

export default Statistics;
