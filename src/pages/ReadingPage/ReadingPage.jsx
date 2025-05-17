import MainViewDiary from "../../components/MainViewDiary/MainViewDiary.jsx";
import AddReading from "../../components/AddReading/AddReading.jsx";
import Progress from "../../components/Progress/Progress.jsx";
import StartReading from "../../components/StartReading/StartReading.jsx";
import styles from "./ReadingPage.module.css";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";
import { useSelector } from "react-redux";

const ReadingPage = () => {
  const book = useSelector(selectUserReadingBooks);
  const bookProgress = book?.progress || [];

  return (
    <div className={styles.reading_page_div}>
      <div className={styles.reading_dashboard}>
        <StartReading />
        {bookProgress.length > 0 ? <MainViewDiary /> : <Progress />}
      </div>
      <AddReading />;
    </div>
  );
};

export default ReadingPage;
