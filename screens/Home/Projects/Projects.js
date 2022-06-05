import cn from "classnames";
import Tag from "../../../components/Tag";
import TextOverlap from "../../../components/TextOverlap";
import Project from "./Project";
import styles from "./projects.module.css";
import React, { useState } from "react";
import VideoModal from "../../../components/VideoModal";

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

const Projects = () => {
  return (
    <div className={cn("section section-pb")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number="02" background="#cabdff" />
            <TextOverlap title="Projects" text="Projects" />
          </div>

          <button className={cn("button-small", styles.button)}>
            View Projects
          </button>
        </div>

        <div className={styles.wrapper}>
          {projects.map((item, index) => (
            <Project key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
