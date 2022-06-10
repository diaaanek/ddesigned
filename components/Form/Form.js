import cn from "classnames";
import styles from "./form.module.css";

const Form = () => {
  return (
    <form className={styles.container}>
      <input className={cn("caption", styles.input)} placeholder="Name" />
      <button className={cn("button", styles.button)}>Send Message</button>
    </form>
  );
};

export default Form;
