import React, { ReactElement } from "react";
import Section from "./Section";
import styles from "./../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {}

const projects = [
  // {
  //   title: "Flashy",
  //   image: "/images/flashyresponsive.png",
  //   height: 280,
  //   width: 420,
  //   content: (
  //     <p>
  //       A MERN-stack website that gives students a place to study and memorise
  //       flashcards as well as create and manage their decks and cards.
  //     </p>
  //   ),
  //   appLink: "https://compassionate-goldstine-5ecea8.netlify.app",
  //   gitHubLink: "https://github.com/JeffreyTan1",
  // },
  {
    title: "LetterDoc",
    image: "/images/letterdoc.png",
    height: 430,
    width: 500,
    content: (
      <p>

        A tool for neurologists to write letters that describe a patient&apos;s condition to their
        GPs, using OpenAI&apos;s GPT-3 text completion. LetterDoc aims to reduce the time spent on writing letters
        to free up more time for doctors to spend with their patients.
      </p>
    ),
    appLink: "https://letterdoc.jeffreytan.dev/",
  },
  {
    title: "StrokeForms",
    image: "/images/strokeforms.png",
    height: 300,
    width: 370,
    content: (
      <p>
        A React-Native mobile app created in partnership with a stroke unit
        doctor. StrokeForms streamlines checking in stroke patients and
        simplifies the paperwork afterwards.
      </p>
    ),
    appLink:
      "https://play.google.com/store/apps/details?id=com.jeffreytandev.StrokeForms",
  },
  {
    title: "Aside",
    image: "/images/aside.png",
    height: 280,
    width: 450,
    content: (
      <p>
        Open any URL webpage as a small popup window. Aside is a Chrome
        extension made using React and the Manifest V3 API.
      </p>
    ),
    appLink:
      "https://chrome.google.com/webstore/detail/aside/jbkogoifcdhkdfohohhhaodaindieidc?hl=en-GB",
    gitHubLink: "https://github.com/JeffreyTan1/aside-chrome-ext",
  },
  {
    title: "Inventorio",
    image: "/images/inventorio.png",
    height: 280,
    width: 420,
    content: (
      <p>
        A React-Native application for managing an inventory locally on your
        device. Whether it be for a warehouse or just your bedroom, Inventorio
        is here to help you organise your items and collections. With a playful
        UI with satisfying animations, keeping track of things has never been so
        fun.
      </p>
    ),
    appLink:
      "https://play.google.com/store/apps/details?id=com.nexusenigma.inventorio",
    gitHubLink: "https://github.com/JeffreyTan1/inventorio-react-native",
  },
];

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
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects({}: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Section id="projects">
      <motion.div
        className={styles.projects}
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : ""}
        variants={container}
      >
        <motion.h2 variants={item}>Side Projects</motion.h2>
        <div className={styles.projectsCards}>
          {projects.map((project, index) => (
            <ProjectCard
              title={project.title}
              image={project.image}
              imgHeight={project.height}
              imgWidth={project.width}
              imgLeft={index % 2 === 0}
              key={index}
              index={index}
              appLink={project.appLink}
              gitHubLink={project.gitHubLink}
            >
              {project.content}
            </ProjectCard>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
