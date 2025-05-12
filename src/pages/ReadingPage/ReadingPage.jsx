import { useSelector } from "react-redux";
import AddReading from "../../components/AddReading/AddReading";
import Diary from "../../components/Diary/Diary";
import Progress from "../../components/Progress/Progress";
import StartReading from "../../components/StartReading/StartReading";
import styles from "./ReadingPage.module.css";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";
import Statistics from "../../components/Statistics/Statistics";

const ReadingPage = () => {
  const book = useSelector(selectUserReadingBooks);
  const bookProgress = book?.progress || [];

  return (
    <div className={styles.reading_page_div}>
      <div className={styles.add_reading_dashboard}>
        <StartReading />
        {bookProgress.length > 0 ? <Diary /> : <Progress />}
        <Statistics />
      </div>
      <AddReading />;
    </div>
  );
};

export default ReadingPage;
