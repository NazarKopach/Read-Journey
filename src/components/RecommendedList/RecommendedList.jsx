import { useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

import styles from "./RecommendedList.module.css";
import RecommendedModal from "../RecommendedModal/RecommendedModal";

const RecommendedList = ({ items }) => {
  const isMobile = useIsMobile();
  const [selectedBook, setSelectedBook] = useState(null);

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
      width: isMobile ? "335px" : "500px",
      minHeight: isMobile ? "421px" : "483px",
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
      <ul className={styles.recommended_list}>
        {Array.isArray(items) &&
          items.map((book) => (
            <li
              key={book._id}
              className={styles.recommended_list_item}
              onClick={() => openModal(book)}
            >
              <img
                src={
                  book.imageUrl ||
                  "https://res.cloudinary.com/dv2zqpclm/image/upload/v1747830751/book_bftknp.png"
                }
                alt={book.description}
                className={styles.recommended_list_img}
              />
              <p className={styles.recommended_list_title}>{book.title}</p>
              <p className={styles.recommended_list_author}>{book.author}</p>
            </li>
          ))}
      </ul>

      {selectedBook && (
        <RecommendedModal
          modalIsOpen={!!selectedBook}
          closeModal={closeModal}
          customStyles={customStyles}
          img={selectedBook.imageUrl}
          author={selectedBook.author}
          title={selectedBook.title}
          totalPages={selectedBook.totalPages}
          id={selectedBook._id}
          className={styles.recommended_modal}
        />
      )}
    </>
  );
};

export default RecommendedList;
