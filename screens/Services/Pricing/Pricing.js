import cn from "classnames";
import styles from "./pricing.module.css";
import TextOverlap from "../../../components/TextOverlap";
import Tag from "../../../components/Tag";
import Item from "./Item";
import Icon from "../../../components/Icon";

const pricing = [
  {
    plan: "BASIC",
    price: "$40",
    options: ["true", "true", "false", "false", "false"],
  },
  {
    plan: "BASIC",
    price: "$50",
    options: ["true", "true", "true", "false", "false"],
  },
  {
    plan: "BASIC",
    price: "$60",
    options: ["true", "true", "true", "true", "false"],
  },
  {
    plan: "BASIC",
    price: "$70",
    options: ["true", "true", "true", "true", "true"],
  },
];

const Pricing = () => {
  const renderContent = (content) => {
    if (content === "true") {
      return (
        <div className={styles.feature}>
          <Icon name="tick" />
          <p className={cn("caption-bold")} style={{ color: "#23262f" }}>
            Lorem ipsum dolor
          </p>
        </div>
      );
    }
    if (content === "false") {
      return (
        <div className={styles.feature}>
          <Icon name="close" />
          <p className={cn("caption-bold")} style={{ color: "#23262f" }}>
            Lorem ipsum dolor
          </p>
        </div>
      );
    }
    return <div className={styles.minus}>{content}</div>;
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number="01" background="#ffbc99" />
            <TextOverlap title="Services" text="Services" />
          </div>

          <button className={cn("button-small", styles.button)}>
            View Services
          </button>
        </div>

        <div className={styles.wrapper}>
          {pricing.map((type, index) => (
            <div className={styles.item_container}>
              <p className={cn("hairline-small")}>{type.plan}</p>
              <h2 className={cn("h1", styles.price)}>{type.price}</h2>
              <div className={styles.features}>
                <div className={styles.feature}>
                  {renderContent(type.options[index])}
                  {/* <Icon color={type.color} name={type.icon} />
                  <p
                    className={cn("caption-bold")}
                    style={{ color: type.color }}
                  >
                    What
                  </p> */}
                </div>
              </div>
              <button className={cn("button")}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
