import styles from "./AddReading.module.css";

const AddReading = ({ id }) => {
  return (
    <div className={styles.add_reading_div}>
      <h2 className={styles.add_reading_title}>My reading</h2>
    </div>
  );
};

export default AddReading;
