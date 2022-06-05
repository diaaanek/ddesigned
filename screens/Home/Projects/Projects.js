import cn from "classnames";
import Tag from "../../../components/Tag";
import TextOverlap from "../../../components/TextOverlap";
import Project from "./Project";
import styles from "./projects.module.css";

const projects = [
  {
    image: "/images/01.jpg",
    title: "Wasting Angels",
  },
  {
    image: "/images/01.jpg",
    title: "Reputation",
  },
  {
    image: "/images/01.jpg",
    title: "Lemon Tree",
  },
];

const Projects = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number="02" background="#cabdff" />
            <TextOverlap title="Projects" text="Projects" />
          </div>

          <button className={cn("button-small", styles.button)}>
            View Projects
          </button>
        </div>

        <div className={styles.wrapper}>
          {projects.map((item, index) => (
            <Project key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
