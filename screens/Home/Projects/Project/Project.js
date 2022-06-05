import cn from "classnames";
import styles from "./project.module.css";

const Project = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={props.image} />
        <div className={styles.overlay} />
      </div>
      <p className={cn("body-2-bold", styles.title)}>{props.title}</p>
    </div>
  );
};

export default Project;
