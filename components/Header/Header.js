import styles from "./header.module.css";
import cn from "classnames";

const Header = () => {
  return (
    <header className={styles.section}>
      <div className={cn("container", styles.container)}>
        <p className={cn("body-bold")}>Vedio</p>
        <button className={cn("button button-small")}>Let's talk</button>
      </div>
    </header>
  );
};

export default Header;
