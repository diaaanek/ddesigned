import cn from "classnames";
import styles from "./clients.module.css";
import TextOverlap from "../../../components/TextOverlap";
import Tag from "../../../components/Tag";
import Client from "./Client";
import ScrollAnimation from "../../../components/ScrollAnimation";

const logos = [
  {
    name: "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657168080/5e9ba46388adf7d226b3bd2e_awwwards-seeklogo.com.svg",
  },
  {
    name: "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657168081/5e9ba463b27cf60b2c9a7554_dribbble-logo.svg",
  },
  {
    name: "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657168080/5e9ba4639aae7e3a14b5f282_product-hunt-logo-horizontal-black.svg",
  },
  {
    name: "https://res.cloudinary.com/dxrvvjvpf/image/upload/v1657168080/5e9ba4634c5ff90b59c1abdf_lapa-logo.svg",
  },
];

const Clients = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          {/* <Tag number='03' background='#b1e5fc' /> */}
          <TextOverlap title='features' text='features' />
        </div>

        <div className={styles.wrapper}>
          {logos.map((item, index) => (
            <ScrollAnimation key={index}>
              <Client {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
