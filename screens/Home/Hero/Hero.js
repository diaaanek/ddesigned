import styles from "./hero.module.css";
import cn from "classnames";
import Stats from "./Stats";
import { motion } from "framer-motion";
import { variants, item } from "../../../variants/animation";
import Image from "next/image";
import Link from "next/link";
import { Link as AnchorLink } from "react-scroll";

const stats = [
  {
    title: "+18",
    text: "clients worldwide",
  },
  {
    title: "5",
    text: "awards won",
  },
];

const Hero = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <motion.div
          initial='hidden'
          animate='show'
          variants={variants}
          className={styles.content}
        >
          <motion.span variants={item} className={cn("hairline", styles.span)}>
            DESIGN + CODE
          </motion.span>
          <motion.h1 variants={item} className={cn("hero", styles.title)}>
            bringing{" "}
            <span className={cn("span2", styles.span2)}>ideas to life</span>{" "}
            with design, code, & lots of love
          </motion.h1>
          <motion.p variants={item} className={cn("body", styles.subtitle)}>
            lead developer/designer for mobile and web apps with over{" "}
            <span className={cn("body-bold", styles.text)}>7 years</span>{" "}
            experience
          </motion.p>
          <div className={styles.wrapper}>
            <Link href='mailto:dkorongy@gmail.com'>
              <a>
                <motion.button
                  variants={item}
                  className={cn("button", styles.button)}
                >
                  let's talk :)
                </motion.button>
              </a>
            </Link>
            {/* <AnchorLink to='projects' offset={-128} smooth={true}>
              <motion.button
                variants={item}
                className={cn("button button-stroke", styles.button)}
              >
                some projects
              </motion.button>
            </AnchorLink> */}
          </div>

          <div className={styles.stats_wrapper}>
            {stats.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <motion.div variants={item}>
                <Stats variants={item} key={index} {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className={styles.image_container}>
          {/* <Image
            className={styles.image}
            src='/images/avatar.jpeg'
            layout='fill'
            placeholder='blur'
            blurDataURL='/images/avatar.jpeg'
          /> */}

          {/* <div className={styles.author}>
            <p className={cn("caption", styles.name)}>diane</p>
          </div> */}
          <div className={styles.overlay} />
        </div>
      </div>
      <div className={cn("one", styles.one)}></div>
      <div className={cn("two", styles.two)}></div>
      <div className={cn("three", styles.three)}></div>
      <div className={cn("four", styles.four)}></div>
      <div className={cn("five", styles.five)}></div>
    </div>
  );
};

export default Hero;
