import styles from "./header.module.css";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About us", href: "/aboutus" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.section}>
      <div className={cn("container", styles.container)}>
        <p className={cn("body-bold")}>Vedio</p>

        <div className={styles.links}>
          {links.map((item, index) => (
            <Link key={index} href={item.href}>
              <a
                className={cn(
                  "button-small",
                  router.pathname == item.href ? styles.active : styles.inactive
                )}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <button className={cn("button-small", styles.link)}>
          {"Let's talk"}
        </button>
      </div>
    </header>
  );
};

export default Header;
