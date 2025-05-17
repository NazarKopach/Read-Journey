import Filters from "../../components/Filters/Filters.jsx";
import InfoDashboard from "../../components/InfoDashboard/InfoDashboard.jsx";
import QuoteDashboard from "../../components/QuoteDashboard/QuoteDashboard.jsx";

import RecommendedBook from "../../components/RecommendedBook/RecommendedBook";

import styles from "./RecommendedPage.module.css";

const RecommendedPage = () => {
  return (
    <div className={styles.recommended_page_div}>
      <div className={styles.recommended_page_dashboard}>
        <Filters />
        <InfoDashboard />
        <QuoteDashboard />
      </div>

      <RecommendedBook />
    </div>
  );
};

export default RecommendedPage;
