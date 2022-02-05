import React, { ReactElement } from 'react'
import Section from './Section'
import styles from './../styles/Projects.module.css'
import ProjectCard from './ProjectCard'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';


interface Props {
  
}

const projects = [
  {
    title: 'Flashy',
    image: '/images/flashyresponsive.png',
    height: 410,
    width: 650,
    content: <p>A MERN-stack website that gives students 
    a place to study and memorise flashcards as well as creating and managing your decks and cards.</p>,
    appLink: 'https://compassionate-goldstine-5ecea8.netlify.app',
    gitHubLink: 'https://github.com/JeffreyTan1/flashcards'
  },
  {
    title: 'StrokeForms',
    image: '/images/strokeforms.png',
    height: 400,
    width: 470,
    content: <p>A React-Native mobile application created in partnership with my brother who
      is a hospital physician working in a stroke unit. 
      Stroke Forms streamlines checking in stroke patients and simplifies the paperwork afterward.
      </p>,
    appLink: 'https://expo.dev/@nexusenigma/StrokeForms',
    gitHubLink: 'https://github.com/JeffreyTan1/StrokeForms'
  },
  {
    title: 'Inventorio',
    image: '/images/inventorio.png',
    height: 400,
    width: 620,
    content: <p>A React-Native mobile application for managing inventory locally on your device. 
      Whether it be for a warehouse or just your bedroom, Inventorio is here to help you organise your items and collections.
      All while providing a modern UI with satisfying animations to make keeping track of things fun.</p>,
    appLink: 'https://expo.dev/@nexusenigma/inventorio',
    gitHubLink: 'https://github.com/JeffreyTan1/inventorio'
  },

]


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: {duration: 0.6} },
}

export default function Projects({}: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Section id='projects'>
      <motion.div className={styles.projects} 
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : ""}
      variants={container}
      >
        <motion.h2 variants={item}><span>{`03. `}</span>Projects</motion.h2>
        <div className={styles.projectsCards}>
          {
            projects.map((project, index) => (
              <ProjectCard title={project.title} 
              image={project.image} imgHeight={project.height} 
              imgWidth={project.width} imgLeft={index % 2 === 0} key={index} index={index}
              appLink={project.appLink} gitHubLink={project.gitHubLink}
              >
                {project.content}
              </ProjectCard>
            ))
          }
        </div>
      </motion.div>
    </Section>
  )
}

