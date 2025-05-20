import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../Icon/Icon";
import { fetchBooks } from "../../redux/books/operations";
import { setPage } from "../../redux/books/slice";
import {
  selectBooks,
  selectBooksIsLoading,
  selectPages,
} from "../../redux/books/selectors";

import RecommendedList from "../RecommendedList/RecommendedList.jsx";
import Loader from "../Loader/Loader.jsx";
import styles from "./RecommendedBook.module.css";

const RecommendedBook = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBooks);
  const loading = useSelector(selectBooksIsLoading);
  const { page, totalPages } = useSelector(selectPages);
  const { title, author } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchBooks({ page, title, author }));
  }, [dispatch, page]);

  const changePage = (direction) => {
    if (direction === "prev" && page > 1) {
      dispatch(setPage(page - 1));
    } else if (direction === "next" && page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <div className={styles.recommended_book_div}>
      <div className={styles.recommended_book_title_icon_div}>
        <h2 className={styles.recommended_book_title}>Recommended</h2>
        {loading && <Loader />}
        {Array.isArray(items) && items.length === 0 && !loading && (
          <p className={styles.recommended_books_error}>No books found.</p>
        )}
        <div>
          <Icon
            id={page > 1 ? "icon-Frame-33" : "icon-Frame-32"}
            className={styles.recommended_book_icon_left}
            onClick={() => changePage("prev")}
          />
          <Icon
            id={page < totalPages ? "icon-Frame-34" : "icon-Frame-35"}
            onClick={() => changePage("next")}
            className={styles.recommended_book_icon_right}
          />
        </div>
      </div>
      <RecommendedList items={items} />
    </div>
  );
};

export default RecommendedBook;
