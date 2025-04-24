import Dashboard from "../../components/Dashboard/Dashboard";
import RecommendedBook from "../../components/RecommendedBook/RecommendedBook";

import styles from "./RecommendedPage.module.css";

const RecommendedPage = () => {
  return (
    <div className={styles.recommended_page_div}>
      <Dashboard />
      <RecommendedBook />
    </div>
  );
};

export default RecommendedPage;
