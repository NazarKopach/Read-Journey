import { NavLink } from "react-router-dom";
import Filters from "../Filters/Filters";
import InfoDashboard from "../InfoDashboard/InfoDashboard";
import styles from "./Dashboard.module.css";
import QuoteDashboard from "../QuoteDashboard/QuoteDashboard";

const Dashboard = () => {
  return (
    <div className={styles.dasboard_div}>
      <Filters />
      <InfoDashboard />
      <QuoteDashboard />
    </div>
  );
};

export default Dashboard;
