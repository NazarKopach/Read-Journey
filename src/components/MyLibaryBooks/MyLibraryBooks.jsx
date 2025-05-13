import { useEffect } from "react";
import styles from "./MyLibraryBooks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelectBooksState } from "../../redux/recommendedBooks/selectors";
import MyLibraryList from "../MyLibraryList/MyLibraryList";
import { userRecommendedBooks } from "../../redux/recommendedBooks/operations";

const MyLibraryBooks = () => {
  const dispatch = useDispatch();
  const userBooks = useSelector(userSelectBooksState);
  console.log(userBooks);

  useEffect(() => {
    dispatch(userRecommendedBooks());
  }, [dispatch]);

  return (
    <div className={styles.my_library_books_div}>
      <div className={styles.my_library_books_select_div}>
        <h1 className={styles.my_library_books_title}>My library</h1>
        <select className={styles.my_library_books_select}>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>

      <MyLibraryList items={userBooks} />
    </div>
  );
};
export default MyLibraryBooks;
