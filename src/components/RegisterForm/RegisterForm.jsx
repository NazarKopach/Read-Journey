import { NavLink } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import styles from "./RegisterForm.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { schemaRegister } from "../../utils/schema";
import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/operations";

const RegisterForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = (data) => {
    dispatch(apiRegisterUser(data));
    reset();
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className={styles.register_form_div}>
      {isMobile ? (
        <Icon id="icon-Logo-mobile" width="42" height="17" />
      ) : (
        <Icon id="icon-Logo-2" width="182" height="17" />
      )}
      <h1 className={styles.register_form_title}>
        Expand your mind, reading{" "}
        <span className={styles.register_form_span}>a book</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input
            {...register("name")}
            type="text"
            className={styles.register_form_input}
            placeholder="Name:"
          />
          {errors.name && (
            <p className={styles.register_form_input_error}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            type="text"
            className={styles.register_form_input}
            placeholder="Email:"
          />
          {errors.email && (
            <p className={styles.register_form_input_error}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className={styles.register_form_input_password_div}>
          <Icon
            id={showPassword ? "icon-eye" : "icon-eye-off"}
            width="20"
            height="20"
            className={styles.register_form_input_icon}
            onClick={() => setShowPassword((prev) => !prev)}
          />
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className={styles.register_form_input}
            placeholder="Password:"
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
