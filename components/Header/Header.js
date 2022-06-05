import styles from "./header.module.css";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Icon from "../Icon";
import OutsideClickHandler from "react-outside-click-handler";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About us", href: "/aboutus" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className={styles.section}>
      <div className={cn("container", styles.container)}>
        <p className={cn("body-bold", styles.logo)}>Vedio</p>
        <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
          <div className={menu ? styles.responsive_links : styles.links}>
            {links.map((item, index) => (
              <Link key={index} href={item.href}>
                <a
                  className={cn(
                    "button-small",
                    router.pathname == item.href
                      ? styles.active
                      : styles.inactive
                  )}
                >
                  {item.name}
                </a>
              </Link>
            ))}

            <button
              className={cn("button-svg", styles.close_button)}
              onClick={closeMenu}
            >
              <Icon name="close" />
            </button>

            <button className={cn("button-small", styles.menu_link)}>
              {"Let's talk"}
            </button>
          </div>
        </OutsideClickHandler>

        <button className={cn("button-small", styles.link)}>
          {"Let's talk"}
        </button>

        <button
          className={cn("button-svg", styles.open_button)}
          onClick={openMenu}
        >
          <Icon name="menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
