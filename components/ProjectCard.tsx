import Image from "next/image";
import React, { ReactElement } from "react";
import styles from "./../styles/ProjectCard.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  image: string;
  children: any;
  imgHeight: number;
  imgWidth: number;
  imgLeft: boolean;
  appLink: string;
  gitHubLink: string;
  index: number;
}

export default function ProjectCard({
  title,
  image,
  imgHeight,
  imgWidth,
  imgLeft,
  children,
  appLink,
  gitHubLink,
  index,
}: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0, x: index % 2 === 0 ? "100" : "-100" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectCard} ${imgLeft ? "" : styles.imgRight}`}
      initial="hidden"
      animate={inView ? "show" : ""}
      variants={container}
    >
      <Image
        src={image}
        alt={title}
        width={imgWidth}
        height={imgHeight}
        quality={100}
        className={styles.img}
      />
      <div className={styles.content}>
        <motion.h2>{title}</motion.h2>
        <motion.div>{children}</motion.div>
        <motion.div className={styles.links}>
          <a
            href={appLink}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
            style={{ color: "#fff" }}
          >
            View it here
          </a>
          <a
            href={gitHubLink}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
            style={{ color: "#fff" }}
          >
            See the Repo
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
