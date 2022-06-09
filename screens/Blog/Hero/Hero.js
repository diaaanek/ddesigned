import cn from "classnames";
import Breadcrumb from "../../../components/Breadcrumb";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
import { item, variants } from "../../../variants/animation";

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
          <Breadcrumb name="BLOG" />
          <motion.h1 variants={item} className={cn("hero", styles.title)}>
            Blog
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
