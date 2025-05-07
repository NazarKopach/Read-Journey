import { useSelector } from "react-redux";
import styles from "./MyLibraryRecommended.module.css";
import { selectBooks } from "../../redux/books/selectors";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../Icon/Icon";

const MyLibraryRecommended = () => {
  const navigate = useNavigate();

  const items = useSelector(selectBooks);
  return (
    <div className={styles.my_library_recommended}>
      <h2 className={styles.recommended_book_title}>Recommended book</h2>
      <ul className={styles.recommended_list}>
        {Array.isArray(items) &&
          items.slice(0, 3).map((book) => (
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
      <div className={styles.my_library_recommended_link_div}>
        <Link to="/recommended" className={styles.my_library_recommended_link}>
          Home
        </Link>
        <Icon
          className={styles.my_library_recommended_icon}
          id="icon-log-in"
          width="24"
          heiht="24"
          onClick={() => navigate("/recommended")}
        />
      </div>
    </div>
  );
};

export default MyLibraryRecommended;
