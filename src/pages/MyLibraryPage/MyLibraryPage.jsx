import AddBooks from "../../components/addBooks/addBooks";
import MyLibraryBooks from "../../components/MylibaryBooks/MylibraryBooks";
import MyLibraryRecommended from "../../components/MyLibraryRecommended/MyLIbraryRecommended";
import RecommendedBook from "../../components/RecommendedBook/RecommendedBook";

import styles from "./MyLibraryPage.module.css";

const MyLibraryPage = () => {
  return (
    <div className={styles.my_library_page_div}>
      <div className={styles.my_library_dashboard}>
        <AddBooks />
        <MyLibraryRecommended />
      </div>
      <MyLibraryBooks />
    </div>
  );
};

export default MyLibraryPage;
