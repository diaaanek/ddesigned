import cn from "classnames";
import ScrollAnimation from "../ScrollAnimation";
import Service from "../Service";
import Tag from "../Tag";
import TextOverlap from "../TextOverlap";
import Item from "./Item";
import styles from "./news.module.css";
import Link from "next/link";

const News = ({ allNewsData, number }) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number={number} background="#b5e4ca" />
            <TextOverlap title="News" text="News" />
          </div>

          <button className={cn("button-small", styles.button)}>
            View News
          </button>
        </div>

        <div className={styles.wrapper}>
          {allNewsData.map(({ id, image, tag, title }) => (
            <ScrollAnimation key={id}>
              <Link href={`/news/${id}`}>
                <a>
                  <Item image={image} tag={tag} title={title} />
                </a>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
