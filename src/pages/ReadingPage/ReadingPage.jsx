import AddReading from "../../components/AddReading/AddReading";
import styles from "./ReadingPage.module.css";

const ReadingPage = () => {
  return (
    <div className={styles.reading_page_div}>
      <div className={styles.add_reading_dashboard}></div>
      <AddReading />;
    </div>
  );
};

export default ReadingPage;
