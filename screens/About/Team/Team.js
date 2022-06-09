import cn from "classnames";
import styles from "./team.module.css";
import TextOverlap from "../../../components/TextOverlap";
import ScrollAnimation from "../../../components/ScrollAnimation";
import Member from "./Member";

const projects = [
  {
    embed: "WVWxPIzEM3A",
    image: "/images/01.jpg",
    title: "Reputation",
  },
  {
    embed: "WABOrIYhR94",
    image: "/images/02.jpg",
    title: "Copped Up",
  },
  {
    embed: "JXxAnZaZrG0",
    image: "/images/03.jpg",
    title: "Wrapped Around Your Finger",
  },
  {
    embed: "_a0T5qwxANg",
    image: "/images/04.jpg",
    title: "I Like You",
  },
  {
    embed: "o3vqfdvatsQ",
    image: "/images/05.jpg",
    title: "I Cannot Be",
  },
  {
    embed: "HdtJtIQhzbQ",
    image: "/images/06.jpg",
    title: "Insane",
  },
];

const Team = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <span className={cn("hairline-small", styles.hairline)}>TEAM</span>
          <TextOverlap title="Our team" text="Our team" />
        </div>

        <div className={styles.wrapper}>
          {projects.map((item, index) => (
            <ScrollAnimation>
              <Member key={index} {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
