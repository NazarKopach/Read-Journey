import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../Icon/Icon";
import { fetchBooks } from "../../redux/books/operations";
import {
  selectBooks,
  selectBooksIsLoading,
  selectPages,
} from "../../redux/books/selectors";
import RecommendedList from "../RecommendedList/RecommendedList";
import styles from "./RecommendedBook.module.css";

const RecommendedBook = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBooks);
  const isLoading = useSelector(selectBooksIsLoading);
  const { page, totalPages } = useSelector(selectPages);
  const [loadPage, setLoadPage] = useState(1);

  useEffect(() => {
    dispatch(fetchBooks(loadPage));
  }, [dispatch, loadPage]);

  const changePage = (direction) => {
    setLoadPage((prev) => {
      if (direction === "prev" && prev > 1) {
        return prev - 1;
      }
      if (direction === "next" && page < totalPages) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <div className={styles.recommended_book_div}>
      <div className={styles.recommended_book_title_icon_div}>
        <h2 className={styles.recommended_book_title}>Recommended</h2>
        {isLoading && <p>Loading ...</p>}
        <div>
          {page > 1 ? (
            <Icon
              id="icon-Frame-33"
              width="40"
              height="40"
              className={styles.recommended_book_icon_left}
              onClick={() => changePage("prev")}
            />
          ) : (
            <Icon
              id="icon-Frame-32"
              width="40"
              height="40"
              className={styles.recommended_book_icon_left}
              onClick={() => changePage("prev")}
            />
          )}
          {page < totalPages ? (
            <Icon
              id="icon-Frame-34"
              width="40"
              height="40"
              onClick={() => changePage("next")}
              className={styles.recommended_book_icon_right}
            />
          ) : (
            <Icon
              id="icon-Frame-35"
              width="40"
              height="40"
              onClick={() => changePage("next")}
              className={styles.recommended_book_icon_right}
            />
          )}
        </div>
      </div>
      <RecommendedList items={items} />
    </div>
  );
};

export default RecommendedBook;
