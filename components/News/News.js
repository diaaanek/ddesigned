import cn from "classnames";
import Service from "../Service";
import Tag from "../Tag";
import TextOverlap from "../TextOverlap";
import Item from "./Item";
import styles from "./news.module.css";

const news = [
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

const News = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number="04" background="#b5e4ca" />
            <TextOverlap title="News" text="News" />
          </div>

          <button className={cn("button-small", styles.button)}>
            View News
          </button>
        </div>

        <div className={styles.wrapper}>
          {news.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
