import cn from "classnames";
import styles from "./hero.module.css";
import Breadcrumb from "../../../components/Breadcrumb";

const Hero = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Breadcrumb />
          <h1 className={cn("hero", styles.title)}>Services</h1>
          <p className={cn("body", styles.subtitle)}>
            Pellentesque tincidunt tristique neque, eget venenatis enim gravida
            quis. Fusce at egestas libero. Cras convallis egestas ullamcorper
            suspens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
