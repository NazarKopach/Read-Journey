import styles from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={styles.quote_dashboard_div}>
      <img
        src="/icon_quote_dashboard.png"
        alt="icon quote"
        width="40"
        height="40"
      />
      <p className={styles.quote_dashboard_p}>
        "Books are <span className={styles.quote_dashboard_span}>windows</span>{" "}
        to the world, and reading is a journey into the unknown."
      </p>
    </div>
  );
};

export default Quote;
