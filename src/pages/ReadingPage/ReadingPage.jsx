import AddReading from "../../components/AddReading/AddReading";
import Diary from "../../components/Diary/Diary";
import Progress from "../../components/Progress/Progress";
import StartReading from "../../components/StartReading/StartReading";
import styles from "./ReadingPage.module.css";

const ReadingPage = () => {
  return (
    <div className={styles.reading_page_div}>
      <div className={styles.add_reading_dashboard}>
        <StartReading />
        <Progress />
        <Diary />
      </div>
      <AddReading />;
    </div>
  );
};

export default ReadingPage;
