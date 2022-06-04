import styles from "./hero.module.css";
import cn from "classnames";
import Stats from "./Stats";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const stats = [
  {
    title: "+84",
    text: "Clients worldwide",
  },
  {
    title: "120",
    text: "Projects done",
  },
];

const Hero = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          className={styles.content}
        >
          <motion.span variants={item} className={cn("hairline", styles.span)}>
            DESIGN + CODE
          </motion.span>
          <motion.h1 variants={item} className={cn("hero", styles.title)}>
            {"I’m Angel Uriostegui"}
          </motion.h1>
          <motion.p variants={item} className={cn("body", styles.subtitle)}>
            Designing user interfaces for over{" "}
            <span className={cn("body-bold", styles.text)}>2 years</span> as a
            frontend developer
          </motion.p>
          <div className={styles.wrapper}>
            <motion.button variants={item} className={cn("button")}>
              Hire Me
            </motion.button>
            <motion.button
              variants={item}
              className={cn("button button-stroke")}
            >
              Projects
            </motion.button>
          </div>

          <div className={styles.stats_wrapper}>
            {stats.map((item, index) => (
              <motion.div variants={item}>
                <Stats variants={item} key={index} {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className={styles.image_container}>
          <img className={styles.image} src="/images/avatar.jpg" />

          <div className={styles.social_wrapper}>
            <p className={cn("caption")}>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
