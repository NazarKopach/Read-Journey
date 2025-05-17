import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { schemaAddBooks } from "../../utils/schema";
import { addBooks } from "../../redux/recommendedBooks/operations";
import { useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

import AddBookModal from "../AddBookModal/AddBookModal";
import styles from "./addBooks.module.css";

const AddBooks = () => {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();

  const [modalIsOpen, setIsOpen] = useState(false);

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
      width: isMobile ? "335px" : "342px",
      height: isMobile ? "272" : "290px",
      background: "#1f1f1f",
      overflow: "hidden",
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaAddBooks),
  });

  const onSubmit = (data) => {
    dispatch(addBooks(data));
    setIsOpen(true);
    setTimeout(() => reset(), 300);
  };

  return (
    <div className={styles.add_books_div}>
      <span className={styles.add_books_span}>Create your library:</span>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input
            {...register("title")}
            type="text"
            className={styles.add_books_input}
            placeholder="Book title:"
          />
          {errors.title && (
            <p className={styles.add_books_input_error}>
              {errors.title.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("author")}
            type="text"
            className={styles.add_books_input}
            placeholder="The author:"
          />
          {errors.author && (
            <p className={styles.add_books_input_error}>
              {errors.author.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("totalPages")}
            type="text"
            className={styles.add_books_input}
            placeholder="Number of pages:"
          />
        </div>
        {errors.totalPages && (
          <p className={styles.add_books_input_error}>
            {errors.totalPages.message}
          </p>
        )}
        <button className={styles.add_books_btn} type="submit">
          Add books
        </button>
      </form>
      <AddBookModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        customStyles={customStyles}
      />
    </div>
  );
};

export default AddBooks;
