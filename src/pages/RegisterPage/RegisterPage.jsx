import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";
import RegisterImg from "../../components/RegisterImg/RegisterImg.jsx";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.register_page_div}>
      <RegisterForm />
      <RegisterImg />
    </div>
  );
};

export default RegisterPage;
