import { NavLink } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import styles from "./RegisterForm.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name must be at least 3 characters")
    .max(50, "Name must less 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Yup data:", data);
  };

  return (
    <div className={styles.register_form_div}>
      <Icon id="icon-Logo-2" width="182" height="17" />
      <h1 className={styles.register_form_title}>
        Expand your mind, reading{" "}
        <span className={styles.register_form_span}>a book</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input {...register("name")} className={styles.register_form_input} />
          {errors.name && (
            <p className={styles.register_form_input_error}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            className={styles.register_form_input}
          />
          {errors.email && (
            <p className={styles.register_form_input_error}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("password")}
            className={styles.register_form_input}
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

export default RegisterForm;
