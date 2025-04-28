import { useDispatch, useSelector } from "react-redux";
import { setTitle, setAuthor } from "../../redux/filters/filters";
import styles from "./Filters.module.css";
import { fetchBooks } from "../../redux/books/operations";

const Filters = () => {
  const dispatch = useDispatch();
  const { title, author } = useSelector((state) => state.filters);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks({ page: 1, title, author }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.filters_div}>
        <span className={styles.filters_span}>Filters:</span>
        <div className={styles.filters_input_div}>
          <input
            type="text"
            placeholder="Book title"
            className={styles.filters_input}
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
          <input
            type="text"
            placeholder="Book author"
            className={styles.filters_input}
            value={author}
            onChange={(e) => dispatch(setAuthor(e.target.value))}
          />
        </div>
        <button type="submit" className={styles.filters_btn}>
          To apply
        </button>
      </div>
    </form>
  );
};

export default Filters;
