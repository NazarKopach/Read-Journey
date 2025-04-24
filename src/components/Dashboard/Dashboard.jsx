import Filters from "../Filters/Filters";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dasboard_div}>
      <Filters />
    </div>
  );
};

export default Dashboard;
