import cn from "classnames";
import ScrollAnimation from "../ScrollAnimation";
import Service from "../Service";
import Tag from "../Tag";
import TextOverlap from "../TextOverlap";
import Item from "./Item";
import styles from "./news.module.css";

const news = [
  {
    image: "/images/03.jpg",
    text: "REPUTATION",
    title: "Quisque Iddiam Velquam Elementum Pulvinar.",
  },
  {
    image: "/images/04.jpg",
    text: "COPPED UP",
    title: "Quisque Iddiam Velquam Elementum Pulvinar.",
  },
  {
    image: "/images/05.jpg",
    text: "LEMON TREE",
    title: "Quisque Iddiam Velquam Elementum Pulvinar.",
  },
];

const News = (props) => {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number={props.number} background="#b5e4ca" />
            <TextOverlap title="News" text="News" />
          </div>

          <button className={cn("button-small", styles.button)}>
            View News
          </button>
        </div>

        <div className={styles.wrapper}>
          {news.map((item, index) => (
            <ScrollAnimation key={index}>
              <Item {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
