import cn from "classnames";
import Link from "next/link";
import ScrollAnimation from "../../../components/ScrollAnimation";
import Tag from "../../../components/Tag";
import TextOverlap from "../../../components/TextOverlap";
import Project from "./Project";
import styles from "./projects.module.css";

const projects = [
  {
    embed: "WVWxPIzEM3A",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1646937386/Frame_470.png",
    // title: "vetcove",
  },
  {
    embed: "WABOrIYhR94",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1646937385/Rectangle_521.png",
    // title: "branding dev",
  },
  {
    embed: "JXxAnZaZrG0",
    image: "/images/rebound.png",
    // title: "yc startup ui design",
  },
  {
    embed: "_a0T5qwxANg",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1587529327/ronaframe.png",
    // title: "flutter ui design/dev",
  },
  {
    embed: "o3vqfdvatsQ",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1646938385/mock.png",
    // title: "swift ui app",
  },
  {
    embed: "HdtJtIQhzbQ",
    image:
      "https://cdn.dribbble.com/users/3371648/screenshots/9949740/media/9a2ae127b6b79f59e97402b96e3de81c.png?compress=1&resize=1600x1200&vertical=top",
    // title: "b2b saas",
  },
  {
    embed: "o3vqfdvatsQ",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1646938385/mock.png",
  },
  {
    embed: "HdtJtIQhzbQ",
    image:
      "https://cdn.dribbble.com/users/3371648/screenshots/9949740/media/9a2ae127b6b79f59e97402b96e3de81c.png?compress=1&resize=1600x1200&vertical=top",
  },
];

const Projects = () => {
  return (
    <div id='projects' className={cn("section section-pb")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            {/* <Tag number='02' background='#cabdff' /> */}
            <TextOverlap title='projects' text='projects' />
          </div>
          {/* <Link href='/services'>
            <a className={cn("button-small", styles.button)}>View Pricing</a>
          </Link> */}
        </div>

        <div className={styles.wrapper}>
          {projects.map((item, index) => (
            <ScrollAnimation>
              <Project key={index} {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
