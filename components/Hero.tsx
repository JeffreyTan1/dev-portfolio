import React, { ReactElement } from 'react'
import styles from './../styles/Hero.module.css'
import Section from './Section'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {AiOutlineArrowDown} from 'react-icons/ai'

interface Props {
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.3,
      duration: 0.2
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: {duration: 0.5} },
}

const arrow = {
  hidden: { opacity: 0},
  show: { opacity: 1, transition: {duration: 0.5} },
}

export default function Hero({}: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <Section id='hero'>
      <motion.div 
      className={styles.hero}
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : ""}
      variants={container}
      >
        <motion.h3 variants={item}>G&apos;Day 👋, I am</motion.h3>
        <motion.h1 className={styles.name}
        variants={item}>Jeffrey Tan</motion.h1>
        <motion.h1 variants={item}>I build things for mobile and the web.</motion.h1>
        <motion.div variants={arrow} className={styles.callToActionWrapper}
          animate={{ y: 15 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}
        >
          <a href="#about"><AiOutlineArrowDown className={styles.callToAction}/></a>
        </motion.div>
        
      </motion.div> 
     

    </Section>
  )
}
