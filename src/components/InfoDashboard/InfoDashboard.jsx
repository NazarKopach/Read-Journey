import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./InfoDashboard.module.css";
import { Icon } from "../Icon/Icon";

const InfoDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.info_dashboard_div}>
      <h3 className={styles.info_dashboard_title}>Start your workout</h3>
      <div className={styles.info_dashboard_icon_div}>
        <Icon
          className={styles.info_dashboard_icon}
          id="icon-1"
          width="44"
          heiht="44"
        />
        <p className={styles.info_dashboard_p}>
          Create a personal library:{" "}
          <span className={styles.info_dashboard_span}>
            add the books you intend to read to it.
          </span>
        </p>
      </div>
      <div className={styles.info_dashboard_icon_div}>
        <Icon
          className={styles.info_dashboard_icon}
          id="icon-2"
          width="44"
          heiht="44"
        />
        <p className={styles.info_dashboard_p}>
          Create your first workout:{" "}
          <span className={styles.info_dashboard_span}>
            define a goal, choose a period, start training.
          </span>
        </p>
      </div>
      <div className={styles.info_dashboard_nav_div}>
        <Link to="/library" className={styles.info_dashboard_nav}>
          My library
        </Link>
        <Icon
          className={styles.info_dashboard_icon}
          id="icon-log-in"
          width="24"
          heiht="24"
          onClick={() => navigate("/library")}
        />
      </div>
    </div>
  );
};

export default InfoDashboard;
