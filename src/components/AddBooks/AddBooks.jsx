import styles from "./addBooks.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { schemaAddBooks } from "../../utils/schema";
import { addBooks } from "../../redux/recommendedBooks/operations";

const AddBooks = () => {
  const dispatch = useDispatch();

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
    console.log(JSON.stringify(data));
    reset();
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
    </div>
  );
};

export default AddBooks;
