import React, { ReactElement } from "react";
import Section from "./Section";
import styles from "./../styles/Experience.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

interface Props {}

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
    threshold: 0.2,
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

        <motion.p variants={item}>
          I hold a Bachelor&apos;s degree in Computer Science from RMIT
          University, where I built a strong understanding of programming, data
          structures, software development, and software architecture. See my{" "}
          <Link href="/docs/Academic Transcript.pdf">
            <a target="_blank" rel="noopener noreferrer">
              Academic Transcript
            </a>
          </Link>
          .
        </motion.p>

        <motion.p variants={item}>
          I had the amazing opportunity to complete a software engineering
          internship at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.propella.ai/"
          >
            propella.ai
          </a>
          . This hands-on experience allowed me to apply my knowledge and skills
          in a real-world setting and solidified my passion for software
          development.
        </motion.p>

        <motion.p variants={item}>
          I was offered a junior software engineer role at Propella, which
          allowed me to continue my growth and make valuable contributions to
          the team, whilst completing my university studies.
        </motion.p>
        <motion.p variants={item}>
          I was able to see one customer-facing product through from development
          to launch with heavy involment in the architecture and development of
          the product. On top of this, I was able to take on a greenfield
          project to develop a custom internal tool for the team which tightly
          integrated with the company&apos;s main products which were data
          science and data engineering focused.
        </motion.p>
        <motion.p variants={item}>
          My time at Propella has propelled(pun intended) my skills as a
          developer and has gifted me a close look at the inner workings of a
          startup.
        </motion.p>
        <Image
          src={"/images/propella.png"}
          alt={"Propella"}
          width={350}
          height={350}
          quality={100}
        />
      </motion.div>
    </Section>
  );
}
