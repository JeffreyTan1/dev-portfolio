import React, { ReactElement } from "react";
import Section from "./Section";
import styles from "./../styles/Experience.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {}

const paragraph1 = `
I have only just finished 2 years of a 3 year Computer Science course, though I am looking to get an internship soon... so watch this space!
`;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Experience({}: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <Section id="experience">
      <motion.div
        className={styles.experience}
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : ""}
        variants={container}
      >
        <motion.h2 variants={item}>Experience</motion.h2>
        <motion.p variants={item}>{paragraph1}</motion.p>
        <motion.p variants={item}>
          For now, I would like to have my <a href="#projects">work </a>do the
          talking, or take a look at my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/docs/Jeffrey Tan CV.pdf"
          >
            resume
          </a>{" "}
          to see the odd jobs I have done in the past. Lastly, my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/docs/Academic Transcript.pdf"
          >
            Academic Transcript
          </a>{" "}
          may give you an idea on how I am doing at university.
        </motion.p>
      </motion.div>
    </Section>
  );
}
