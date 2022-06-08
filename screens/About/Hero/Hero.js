import cn from "classnames";
import styles from "./hero.module.css";
import Breadcrumb from "../../../components/Breadcrumb";
import { motion } from "framer-motion";
import { variants, item } from "../../../variants/animation";
import Service from "../../../components/Service";
import ScrollAnimation from "../../../components/ScrollAnimation";

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className={cn("section", styles.section)}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Breadcrumb name="ABOUT US" />
          <motion.h1 variants={item} className={cn("hero", styles.title)}>
            About us
          </motion.h1>
          <motion.p variants={item} className={cn("body", styles.subtitle)}>
            Pellentesque tincidunt tristique neque, eget venenatis enim gravida
            quis. Fusce at egestas libero. Cras convallis egestas ullamcorper
            suspens.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
