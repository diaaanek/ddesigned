import cn from "classnames";
import Icon from "../Icon";
import styles from "./author.module.css";

const Author = () => {
  return (
    <a href="https://uriostegui.vercel.app" target="_blank" rel="noreferrer">
      <div className={styles.container}>
        <Icon name="tag" fillRule="evenodd" clipRule="evenodd" />
        <p className={cn("caption-2-bold", styles.title)}>Purchase $30</p>
      </div>
    </a>
  );
};

export default Author;
