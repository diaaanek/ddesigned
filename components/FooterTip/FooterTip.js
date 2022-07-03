import cn from "classnames";
import styles from "./footertip.module.css";

const FooterTip = () => {
  return (
    <div className={cn("container", styles.container)}>
      <p className={cn("caption", styles.title)}>
        copyright © 2022 - built with ♥️ & ☕{" "}
        <a
          href='https://dianedesigned.com'
          target='_blank'
          rel='noreferrer'
          className={cn("caption-bold", styles.author)}
        >
          diane korongy
        </a>
      </p>
      <p className={cn("caption")}>
        terms & conditions | privacy policy | pricing{" "}
      </p>
    </div>
  );
};

export default FooterTip;
