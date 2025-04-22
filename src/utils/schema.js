import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
});

export const schemaRegister = yup.object().shape({
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
