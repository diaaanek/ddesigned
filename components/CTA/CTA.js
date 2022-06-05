import cn from "classnames";
import Tag from "../Tag";
import styles from "./cta.module.css";

const CTA = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.box}>
          <div className={styles.content}>
            <Tag number="05" background="#ffd88d" />
            <h4 className={cn("h2", styles.title)}>
              Let’s talk about your project
            </h4>
            <p className={cn("caption", styles.subtitle)}>
              Donec et enim vitae tellus auctor menean leo diamfeugiat nulla
              sed. consequat venenatis est. Praesent commodo consequat pharetra.
            </p>
            <button className={cn("button", styles.button)}>Contact</button>
          </div>

          <div className={styles.image_container}>
            <img className={styles.image} src="/images/hamid.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
