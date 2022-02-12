import React, { ReactElement } from 'react'
import Section from './Section'
import styles from './../styles/About.module.css'
import Image from 'next/image'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import {SiExpo, SiSpring, SiReact, SiNodedotjs, SiNextdotjs, SiTypescript} from 'react-icons/si'


interface Props {  
}

const paragraph1 = `
I'm Jeff, a full-stack Software Engineer from Melbourne. I have experience building web and mobile apps using JavaScript. 
`

const paragraph2 = `
I am obsessed with building beautiful UX/UI designs, but never shy away from building the odd back-end once in a while.
`

const paragraph3 = `
Outside of programming, I am a big gamer. My game-stack consists of R6, Valorant, Rust, and Minecraft.
I am also an aspiring powerlifter and hope to compete soon.
`

const paragraph4 = `
I swear I stumble across another popular library or framework every day. Here are some of the main technologies I have been using most recently:
`


const techContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
}
const techItem = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: {duration: 0.5} },
}

const TechItem = ({name, description, Icon}) => {
  return (
    <div className={styles.techItem}>
      {Icon}
      <h5 className={styles.techName}>{name}</h5>
      <p>{description}</p>
    </div>
  )
  
}

const techData = [
  {
    description: 'Web Frontends',
    name: 'React',
    icon: <SiReact className={styles.techIcon}/>
  },
  {
    description: 'Restful APIs',
    name: 'NodeJS',
    icon: <SiNodedotjs className={styles.techIcon}/>
  },
  {
    description: 'Restful APIs',
    name: 'Spring',
    icon: <SiSpring className={styles.techIcon}/>
  },
  {
    description: <>Static Websites <br/> (like this!)</>,
    name: 'NextJS',
    icon: <SiNextdotjs className={styles.techIcon}/>
  },
  {
    description: 'React Native Apps',
    name: 'Expo',
    icon: <SiExpo className={styles.techIcon}/>
  },
  {
    description: 'A Stricter JavaScript',
    name: 'TypeScript',
    icon: <SiTypescript className={styles.techIcon}/>
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
}

const Toolkit = () => {

  const { ref, inView } = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });

  

  return (
    <Section id="toolkit">
      <motion.div className={styles.techGrid}
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : ""}
        variants={techContainer}
      >
          {
            techData.map((tech) => (
              <motion.div key={tech.name} variants={techItem}>
                <TechItem  description={tech.description} name={tech.name} Icon={tech.icon}/>
              </motion.div>
            ))
          }
      </motion.div>
    </Section>
  )
}


const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: {duration: 0.9} },
}



export default function About({}: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Section id='about'>
      <motion.div 
      className={styles.about} 
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : ""}
      variants={container}
      >
        <motion.div variants={item} className={styles.imageContainer}>
          <Image src='/images/profile.png' alt="Jeffrey Tan" height={375} width={350} className={styles.image}/>
        </motion.div>
        <div className={styles.content}>
          <motion.h2 variants={item}><span>{`01. `}</span> About Me</motion.h2>
          <motion.p variants={item}>
            {paragraph1}
          </motion.p> 
          <motion.p variants={item}>
            {paragraph2}
          </motion.p>  
          <motion.p variants={item}>
            {paragraph3}
          </motion.p>  
          <motion.p variants={item}>
            {paragraph4}
          </motion.p>  
        </div>
      </motion.div>
      <Toolkit/>
    </Section>
  )
}
