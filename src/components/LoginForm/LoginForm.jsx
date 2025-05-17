import { NavLink } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { schemaLogin } from "../../utils/schema";
import { apiLoginUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(apiLoginUser(data)).unwrap();
      reset();
    } catch {
      toast.error("Login failed");
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className={styles.login_form_div}>
      {isMobile ? (
        <Icon id="icon-Logo-mobile" width="42" height="17" />
      ) : (
        <Icon id="icon-Logo-2" width="182" height="17" />
      )}
      <h1 className={styles.login_form_title}>
        Expand your mind, reading{" "}
        <span className={styles.login_form_span}>a book</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input
            {...register("email")}
            type="text"
            className={`${styles.login_form_input} ${
              errors.email ? styles.inputError : ""
            }`}
            placeholder="Email:"
          />
          {errors.email && (
            <p className={styles.login_form_input_error}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className={styles.login_form_input_password_div}>
          <Icon
            id={showPassword ? "icon-eye" : "icon-eye-off"}
            width="20"
            height="20"
            className={styles.login_form_input_icon}
            onClick={() => setShowPassword((prev) => !prev)}
          />
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className={`${styles.login_form_input} ${
              errors.password ? styles.inputError : ""
            }`}
            placeholder="Password:"
          />
        </div>
        {errors.password && (
          <p className={styles.login_form_input_error}>
            {errors.password.message}
          </p>
        )}
        <button className={styles.login_form_btn} type="submit">
          Log In
        </button>
        <NavLink className={styles.login_form_link} to="/register">
          Don’t have an account?
        </NavLink>
      </form>
    </div>
  );
};

export default LoginForm;
