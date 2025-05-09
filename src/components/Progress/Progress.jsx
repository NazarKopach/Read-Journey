import styles from "./Progress.module.css";

const Progress = () => {
  return (
    <div className={styles.proress_div}>
      <h2 className={styles.progress_title}>Progress</h2>
      <p className={styles.progress_info}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <img
        className={styles.progress_img}
        src="/start.png"
        alt="icon quote"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Progress;
