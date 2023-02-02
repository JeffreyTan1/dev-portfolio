import React, { ReactElement } from "react";
import styles from "./../styles/Toolkit.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiExpo,
  SiSpring,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiDotnet,
  SiDatabricks,
} from "react-icons/si";

const techContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};
const techItem = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechItem = ({ name, description, Icon }) => {
  return (
    <div className={styles.techItem}>
      {Icon}
      <h5 className={styles.techName}>{name}</h5>
      <p>{description}</p>
    </div>
  );
};

const techData = [
  {
    description: (
      <>
        Web & Mobile <br /> Frontends
      </>
    ),
    name: "React",
    icon: <SiReact className={styles.techIcon} />,
  },
  {
    description: (
      <>
        Fullstack SSR, SSG, ISR <br /> Web Apps
      </>
    ),
    name: "NextJS",
    icon: <SiNextdotjs className={styles.techIcon} />,
  },
  {
    description: "My Favorite Language",
    name: "TypeScript",
    icon: <SiTypescript className={styles.techIcon} />,
  },
  {
    description: "Data Science & Engineering",
    name: "Azure Databricks",
    icon: <SiDatabricks className={styles.techIcon} />,
  },
  {
    description: "APIs & Microservices",
    name: "ASP.NET",
    icon: <SiDotnet className={styles.techIcon} />,
  },

  {
    description: "React Native Apps",
    name: "Expo",
    icon: <SiExpo className={styles.techIcon} />,
  },
];

const Toolkit = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      className={styles.techGrid}
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : ""}
      variants={techContainer}
    >
      {techData.map((tech) => (
        <motion.div key={tech.name} variants={techItem}>
          <TechItem
            description={tech.description}
            name={tech.name}
            Icon={tech.icon}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Toolkit;
