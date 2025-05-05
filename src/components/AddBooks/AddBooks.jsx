import styles from "./addBooks.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { schemaAddBooks } from "../../utils/schema";
import { addBooks } from "../../redux/recommendedBooks/operations";
import { NavLink } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input
            {...register("title")}
            type="text"
            className={styles.register_form_input}
            placeholder="title:"
          />
          {errors.name && (
            <p className={styles.register_form_input_error}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("author")}
            type="text"
            className={styles.register_form_input}
            placeholder="author:"
          />
          {errors.email && (
            <p className={styles.register_form_input_error}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className={styles.register_form_input_password_div}>
          <input
            {...register("pages")}
            type="text"
            className={styles.register_form_input}
            placeholder="Number of pages:"
          />
        </div>
        {errors.password && (
          <p className={styles.register_form_input_error}>
            {errors.password.message}
          </p>
        )}
        <button className={styles.register_form_btn} type="submit">
          Registration
        </button>
        <NavLink className={styles.register_form_link} to="/login">
          Already have an account?
        </NavLink>
      </form>
    </div>
  );
};

export default AddBooks;
