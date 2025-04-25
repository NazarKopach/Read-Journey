import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters_div}>
      <span className={styles.filters_span}>Filters:</span>
      <div className={styles.filters_input_div}>
        <input
          type="text"
          placeholder="Book title"
          className={styles.filters_input}
        />
        <input
          type="text"
          placeholder="Book author"
          className={styles.filters_input}
        />
      </div>
      <button type="submit" className={styles.filters_btn}>
        To apply
      </button>
    </div>
  );
};

export default Filters;
