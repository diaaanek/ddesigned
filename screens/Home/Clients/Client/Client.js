import cn from "classnames";
import styles from "./client.module.css";

const Client = (props) => {
  return (
    <div className={styles.container}>
      <img width='120px' height='30px' src={props.name} />
    </div>
  );
};

export default Client;
