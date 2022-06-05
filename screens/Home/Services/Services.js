import styles from "./services.module.css";
import cn from "classnames";
import TextOverlap from "../../../components/TextOverlap";
import Tag from "../../../components/Tag";
import Service from "../../../components/Service";

const services = [
  {
    icon: "paint-bucket",
    title: "UI-X Design",
    subtitle:
      "Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.",
  },
  {
    icon: "plugin",
    title: "App Development",
    subtitle:
      "Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.",
  },
  {
    icon: "globe",
    title: "Web Development",
    subtitle:
      "Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.",
  },
];

const Services = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number="01" />
            <TextOverlap title="Services" text="Services" />
          </div>

          <button className={cn("button-small", styles.button)}>
            View Services
          </button>
        </div>

        <div className={styles.wrapper}>
          {services.map((item, index) => (
            <Service key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
