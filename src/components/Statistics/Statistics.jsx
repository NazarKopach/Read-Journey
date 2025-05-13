import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Statistics.module.css";
import { useSelector } from "react-redux";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";
import { useReadingStats } from "../../hooks/useReadingStats";

const Statistics = () => {
  const book = useSelector(selectUserReadingBooks);
  const { totalPagesRead, percentage, readSpeed } = useReadingStats(book);

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
