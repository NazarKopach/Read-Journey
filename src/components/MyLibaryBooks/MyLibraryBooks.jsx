import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelectBooksState } from "../../redux/recommendedBooks/selectors";
import { userRecommendedBooks } from "../../redux/recommendedBooks/operations";

import MyLibraryList from "../MyLibraryList/MyLibraryList.jsx";
import Select from "react-select";
import styles from "./MyLibraryBooks.module.css";

const MyLibraryBooks = () => {
  const dispatch = useDispatch();
  const userBooks = useSelector(userSelectBooksState);

  const [filter, setFilter] = useState("");

  const options = [
    { value: "", label: "All books" },
    { value: "unread", label: "Unread" },
    { value: "in-progress", label: "In-progress" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#262626",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      minWidth: "153px",
      border: "none",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#f9f9f9",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: "#262626",
      color: state.isSelected ? "#f9f9f9" : "#686868",
      cursor: "pointer",
      borderRadius: "8px",
      margin: "4px 8px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#686868",
    }),
    menuList: (base) => ({
      ...base,
      backgroundColor: "#262626",
      borderRadius: "12px",
      msOverflowStyle: "none",
      overflowX: "hidden",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#262626",
      borderRadius: "12px",
      overflow: "hidden",
      border: "none",
      boxShadow: "none",
    }),
  };

  useEffect(() => {
    dispatch(userRecommendedBooks({ status: filter }));
  }, [dispatch, filter]);

  return (
    <div className={styles.my_library_books_div}>
      <div className={styles.my_library_books_select_div}>
        <h1 className={styles.my_library_books_title}>My library</h1>
        <Select
          options={options}
          styles={customStyles}
          onChange={(selected) => setFilter(selected.value)}
          defaultValue={options[0]}
        />
      </div>

      {userBooks.length === 0 ? (
        <div>
          <img
            src="/book.png"
            alt="book"
            className={styles.my_library_book_img}
          />
          <p className={styles.my_library_book_p}>
            To start training, add{" "}
            <span className={styles.my_library_book_span}>
              some of your books
            </span>{" "}
            or from the recommended ones
          </p>
        </div>
      ) : (
        <MyLibraryList items={userBooks} />
      )}
    </div>
  );
};
export default MyLibraryBooks;
