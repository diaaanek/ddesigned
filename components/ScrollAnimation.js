import cn from "classnames";
import { motion } from "framer-motion";
import { item, variants } from "../variants/animation";

const ScrollAnimation = ({ children }) => {
  return (
    <motion.div
      className="card-container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      variants={item}
    >
      <motion.div variants={variants}>{children}</motion.div>
    </motion.div>
  );
};

export default ScrollAnimation;
