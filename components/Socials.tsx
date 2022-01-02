import React, { ReactElement } from 'react'
import { motion } from "framer-motion"
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import styles from './../styles/Socials.module.css'

interface Props {
  
}

const container = {
  hidden: { },
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
}
const item = {
  hidden: { opacity: 0, y: -150 },
  show: { opacity: 1, y: 0, transition: {duration: 1} },
}


export default function Socials({}: Props): ReactElement {
  return (
    <motion.div className={styles.socials}
    initial="hidden"
    animate="show"
    variants={container}
    >
      <motion.a variants={item} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeffrey-tan-81441b147/"> 
        <AiOutlineLinkedin className={styles.icon}/>
      </motion.a>
      <motion.a variants={item} target="_blank" rel="noopener noreferrer" href="https://github.com/JeffreyTan1"> 
          <AiOutlineGithub className={styles.icon}/>
      </motion.a>
      <motion.a variants={item} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/j.f.tan/"> 
          <AiOutlineInstagram className={styles.icon}/>
      </motion.a>
      <motion.a variants={item} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jeffweetan"> 
          <AiOutlineFacebook className={styles.icon}/>
      </motion.a>
    </motion.div>
  )
}
