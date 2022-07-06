import cn from "classnames";
import Link from "next/link";
import ScrollAnimation from "../ScrollAnimation";
import Tag from "../Tag";
import styles from "./cta.module.css";

const CTA = (props) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.box}>
          <div className={styles.content}>
            {/* <Tag number={props.number} background={props.background} /> */}
            <h4 className={cn("h4", styles.title)}>{props.title}</h4>
            <p className={cn("caption", styles.subtitle)}>
              {/* With the monthly plan, you can pause and resume your subscription
              as often as you need to ensure you're only paying your designer
              when you have work available for them. */}
            </p>
            <Link href='mailto:dkorongy@gmail.com'>
              <a className={cn("button", styles.button)}>{props.button}</a>
            </Link>
          </div>

          {/* <ScrollAnimation>
            <div className={styles.image_container}>
              <img className={styles.image} src='/images/avatar.jpeg' />
            </div>
          </ScrollAnimation> */}
        </div>
      </div>
    </div>
  );
};

export default CTA;
