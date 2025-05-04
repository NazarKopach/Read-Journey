import styles from "./MyLibraryBooks.module.css";

const MyLibraryBooks = () => {
  return (
    <div className={styles.my_library_books_div}>
      <div className={styles.my_library_books_select_div}>
        <h1 className={styles.my_library_books_title}>My library</h1>
        <select>
          <option>All books</option>
        </select>
      </div>
    </div>
  );
};
export default MyLibraryBooks;
