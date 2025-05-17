import AddBooks from "../../components/AddBooks/AddBooks";
import MyLibraryBooks from "../../components/MyLibaryBooks/MyLibraryBooks";
import MyLibraryRecommended from "../../components/MyLibraryRecommended/MyLIbraryRecommended";

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
