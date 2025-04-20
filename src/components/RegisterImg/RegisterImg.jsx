import styles from "./RegisterImg.module.css";

const RegisterImg = () => {
  return (
    <div className={styles.register_img_div}>
      <img
        src="/img/Phone.png"
        alt="iPhone 15 Black"
        className={styles.register_img_phone}
      />
    </div>
  );
};

export default RegisterImg;
