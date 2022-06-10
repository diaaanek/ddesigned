import cn from "classnames";
import styles from "./form.module.css";

const Form = () => {
  return (
    <form className={styles.container}>
      <input className={styles.input} placeholder="Name" />
    </form>
  );
};

export default Form;
