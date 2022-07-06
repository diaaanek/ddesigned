import styles from "./services.module.css";
import cn from "classnames";
import TextOverlap from "../../../components/TextOverlap";
import Tag from "../../../components/Tag";
import Fact from "./Fact";
import ScrollAnimation from "../../../components/ScrollAnimation";
import Card from "../../../components/Card";
import Link from "next/link";

const services = [
  {
    icon: "paint-bucket",
    title: "product design",
    subtitle:
      "we design your product conception from the ground up. full ux/ui for mobile, web, b2b app or newly seeded startup. starting at $3,995/m",
  },

  {
    icon: "globe",
    title: "web development",
    subtitle:
      "we build the ui of your web app using modern and module front-end frameworks such as react, typescript, and nextjs. starting $4,995/m",
  },
  {
    icon: "plugin",
    title: "native app development",
    subtitle:
      "rapid prototyping, designing, visual concepts to a fully functional live mobile product ui. swift ui, flutter, or react native. book a call learn more about we work",
  },
];

const facts = [
  {
    icon: "diamond",
    number: "~550k",
    title: "users across apps",
  },
  {
    icon: "star",
    number: "$250m",
    title: "million raised",
  },
  {
    icon: "heart",
    number: "18",
    title: "startups since '19",
  },
  {
    icon: "speed-test",
    number: "1",
    title: "kickass designer, duh",
  },
];

const Services = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            {/* <Tag number="01" background="#ffbc99" /> */}
            <TextOverlap title='specialty' text=' specialty' />
          </div>
          {/* <Link href="/services">
            <a className={cn("button-small", styles.button)}>View Services</a>
          </Link> */}
        </div>

        <div className={styles.wrapper}>
          {services.map((item, index) => (
            <ScrollAnimation>
              <Card key={index} {...item} />
            </ScrollAnimation>
          ))}
        </div>
        <div className={styles.facts_wrapper}>
          {facts.map((item, index) => (
            <ScrollAnimation key={index}>
              <Fact {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
