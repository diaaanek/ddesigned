import cn from "classnames";
import styles from "./team.module.css";
import TextOverlap from "../../../components/TextOverlap";

const Team = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <span className={cn("hairline-small", styles.hairline)}>TEAM</span>
          <TextOverlap title="Our team" text="Our team" />
        </div>
      </div>
    </div>
  );
};

export default Team;
