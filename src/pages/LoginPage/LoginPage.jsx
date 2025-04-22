import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterImg from "../../components/RegisterImg/RegisterImg";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.login_page_div}>
      <LoginForm />
      <RegisterImg />
    </div>
  );
};

export default LoginPage;
