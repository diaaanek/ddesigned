import cn from "classnames";
import styles from "./item.module.css";

const Item = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src="/images/03.jpg" />
      </div>
      <div className={styles.content}>
        <p className={cn("hairline-2", styles.text)}>REPUTATION</p>
        <h4 className={cn("body-2-bold", styles.title)}>
          Quisque Iddiam Velquam Elementum Pulvinar
        </h4>
      </div>
    </div>
  );
};

export default Item;
