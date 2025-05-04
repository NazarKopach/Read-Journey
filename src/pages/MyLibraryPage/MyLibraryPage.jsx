import MyLibraryBooks from "../../components/MylibaryBooks/MylibraryBooks";
import styles from "./MyLibraryPage.module.css";

const MyLibraryPage = () => {
  return (
    <div className={styles.my_library_page_div}>
      <MyLibraryBooks />
    </div>
  );
};

export default MyLibraryPage;
