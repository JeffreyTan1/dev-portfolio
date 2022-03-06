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
    description: "Web Frontends",
    name: "React",
    icon: <SiReact className={styles.techIcon} />,
  },
  {
    description: "Restful APIs",
    name: "NodeJS",
    icon: <SiNodedotjs className={styles.techIcon} />,
  },
  {
    description: "Restful APIs",
    name: "Spring",
    icon: <SiSpring className={styles.techIcon} />,
  },
  {
    description: (
      <>
        Static Websites <br /> (like this!)
      </>
    ),
    name: "NextJS",
    icon: <SiNextdotjs className={styles.techIcon} />,
  },
  {
    description: "React Native Apps",
    name: "Expo",
    icon: <SiExpo className={styles.techIcon} />,
  },
  {
    description: "A Stricter JavaScript",
    name: "TypeScript",
    icon: <SiTypescript className={styles.techIcon} />,
  },
];

const Toolkit = () => {
  const { ref, inView } = useInView({
    threshold: 0.45,
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
