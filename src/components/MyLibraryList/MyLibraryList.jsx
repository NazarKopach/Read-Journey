import { useState } from "react";
import { Icon } from "../Icon/Icon";
import { useDispatch } from "react-redux";
import { delRecommendedBooks } from "../../redux/recommendedBooks/operations";
import { useIsMobile } from "../../hooks/useIsMobile";

import MyLibraryModal from "../MyLibraryModal/MyLibraryModal.jsx";
import styles from "./MyLibraryList.module.css";

const MyLibraryList = ({ items }) => {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();

  const [selectedBook, setSelectedBook] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(20, 20, 20, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid rgba(104, 104, 104, 0.2)",
      borderRadius: "12px",
      width: isMobile ? "335" : "500px",
      height: isMobile ? "421" : "483px",
      background: "#1f1f1f",
      overflow: "hidden",
    },
  };

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <ul className={styles.my_library_list}>
        {Array.isArray(items) &&
          items.slice(0, visibleCount).map((book) => (
            <li key={book._id} className={styles.my_library_list_item}>
              <img
                src={book.imageUrl}
                alt={book.description}
                className={styles.my_library_list_img}
                onClick={() => openModal(book)}
              />
              <div className={styles.my_library_list_title_div}>
                <div>
                  <p className={styles.my_library_list_title}>{book.title}</p>
                  <p className={styles.my_library_list_author}>{book.author}</p>
                </div>
                <Icon
                  id="icon-delete"
                  width="28"
                  height="28"
                  onClick={() => dispatch(delRecommendedBooks(book._id))}
                />
              </div>
            </li>
          ))}
      </ul>

      {Array.isArray(items) && visibleCount < items.length && (
        <button
          onClick={handleShowMore}
          className={styles.my_library_show_more_btn}
        >
          Load more
        </button>
      )}

      {selectedBook && (
        <MyLibraryModal
          modalIsOpen={!!selectedBook}
          closeModal={closeModal}
          customStyles={customStyles}
          img={selectedBook.imageUrl}
          author={selectedBook.author}
          title={selectedBook.title}
          totalPages={selectedBook.totalPages}
          id={selectedBook._id}
        />
      )}
    </>
  );
};

export default MyLibraryList;
