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
    embed: "WVWxPIzEM3A",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657118264/Frame_1000002495.png",
    // title: "vetcove",
  },

  {
    embed: "WVWxPIzEM3A",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657166899/per.png",
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
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657157889/reboun.png",
    // title: "yc startup ui design",
  },
  {
    embed: "JXxAnZaZrG0",
    image:
      "  https://res.cloudinary.com/dxrvvjvpf/image/upload/v1646937384/Frame_868.png",
    // title: "yc startup ui design",
  },

  {
    embed: "_a0T5qwxANg",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1587529327/ronaframe.png",
    // title: "flutter ui design/dev",
  },
  {
    embed: "HdtJtIQhzbQ",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1646937382/repool_mock.png",
    // title: "repool 2022",
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
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1647710229/Normal___018.png",
    // title: "web 3 nft swap in react",
  },

  {
    embed: "o3vqfdvatsQ",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657165041/Three_iPhone_X.png",
    // bach",
  },

  {
    embed: "o3vqfdvatsQ",
    image:
      "  https://res.cloudinary.com/dxrvvjvpf/image/upload/v1578260011/payorplan.png",
  },
  {
    embed: "o3vqfdvatsQ",
    image:
      "  https://res.cloudinary.com/dxrvvjvpf/image/upload/v1647824899/Hero_-_Desktop.png",
  },

  {
    embed: "o3vqfdvatsQ",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657162908/kick.png",
    // title: "kickback",
  },

  {
    embed: "o3vqfdvatsQ",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657163750/wsj.png",
    // title: "wsj",
  },
  // {
  //   embed: "WVWxPIzEM3A",
  //   image:
  //     "https://cdn.dribbble.com/users/3371648/screenshots/9950021/media/2777c8a38068058f674c965544ff873b.png?compress=1&resize=1600x1200&vertical=top",
  //   // title: "bfin",
  // },
  {
    embed: "o3vqfdvatsQ",
    image:
      "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657159748/twin.png",
    // other",
  },
];

const Projects = () => {
  return (
    <div id='projects' className={cn("section section-pb ")}>
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
