import AddBooks from "../../components/addBooks/addBooks";
import MyLibraryBooks from "../../components/MylibaryBooks/MylibraryBooks";
import styles from "./MyLibraryPage.module.css";

const MyLibraryPage = () => {
  return (
    <div className={styles.my_library_page_div}>
      <AddBooks />
      <MyLibraryBooks />
    </div>
  );
};

export default MyLibraryPage;
