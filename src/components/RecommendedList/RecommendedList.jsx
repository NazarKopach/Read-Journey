import { useEffect } from "react";
import { fetchBooks } from "../../redux/books/operations";
import { selectBooks } from "../../redux/books/selectors";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RecommendedList.module.css";

const RecommendedList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchBooks(1));
  }, [dispatch]);

  return (
    <ul className={styles.recommended_list}>
      {Array.isArray(items) &&
        items.map((book) => (
          <li key={book._id} className={styles.recommended_list_item}>
            <img
              src={book.imageUrl}
              alt={book.description}
              className={styles.recommended_list_img}
            />
            <p className={styles.recommended_list_title}>{book.title}</p>
            <p className={styles.recommended_list_author}>{book.author}</p>
          </li>
        ))}
    </ul>
  );
};

export default RecommendedList;
