import { useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./MainViewDiary.module.css";
import Diary from "../Diary/Diary";
import Statistics from "../Statistics/Statistics";

const MainViewDiary = () => {
  const [activeView, setActiveView] = useState("Diary");

  return (
    <div className={styles.main_view_div}>
      <div className={styles.main_view_diary_title_div}>
        <h2 className={styles.main_view_diary_title}>{activeView}</h2>
        <div>
          <Icon
            className={styles.main_view_diary_icon}
            id={
              activeView === "Statistics"
                ? "icon-hourglass-01-1"
                : "icon-hourglass-01"
            }
            width="20"
            height="20"
            onClick={() => setActiveView("Diary")}
          />
          <Icon
            className={styles.main_view_diary_icon}
            id={
              activeView === "Diary"
                ? "icon-pie-chart-02-1"
                : "icon-pie-chart-02"
            }
            width="20"
            height="20"
            onClick={() => setActiveView("Statistics")}
          />
        </div>
      </div>
      <div className={styles.content}>
        {activeView === "Statistics" && <Statistics />}
        {activeView === "Diary" && <Diary />}
      </div>
    </div>
  );
};

export default MainViewDiary;
