import styles from "./services.module.css";
import cn from "classnames";

const Services = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div>
          <h2 className={cn("h2", styles.title)}>Services</h2>
          <h1 className={cn("hero", styles.text)}>Services</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
