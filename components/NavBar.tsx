import React, { ReactElement, useEffect, useState } from 'react'
import styles from '../styles/NavBar.module.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image';

interface Props {
}

function debounce(func: Function, wait: number, immediate?: any) {
  var timeout: NodeJS.Timeout;
  return function() {
      var context = this, args = arguments;
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
};


export default function NavBar({}: Props): ReactElement {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [shadow, setShadow] = useState(false);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70)|| currentScrollPos < 10);
    setShadow(currentScrollPos !== 0)
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const mobileContainer = {
    hidden: { opacity: 0, x: 600},
    show: { opacity: 1, x: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        duration: 0.2
      },
    },
  }

  const webContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.13,
        delayChildren: 0.3,
        duration: 0.2
      },
    },
  }


  const item = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0, transition: {duration: 0.3} },
  }
  


  return (
    <nav className={`${styles.navBar} ${shadow ? styles.navShadow : ''}`} style={{top: visible || hamburgerOpen ? '0' : '-6rem'}}>
      <div className={styles.navBarContent}>
        <a className={styles.navLogo} onClick={() => document.location.href="/"}><Image src="/images/logo.svg" alt="logo" height={70} width={70}/></a>
        <motion.ul className={styles.navMenuWeb}
          initial="hidden"
          animate="show"
          variants={webContainer}
        >
            <motion.li className={styles.navItem}
                variants={item}
              >
                  <a href="#about" className={styles.navLink} onClick={() => {setHamburgerOpen(false); setVisible(false)}}><span className={styles.listNum}>01.</span> About</a>
              </motion.li>
              <motion.li className={styles.navItem}
                variants={item}>
                  <a href="#experience" className={styles.navLink} onClick={() => {setHamburgerOpen(false); setVisible(false)}}><span className={styles.listNum}>02.</span> Experience</a>
              </motion.li>
              <motion.li className={styles.navItem}
                variants={item}>
                  <a href="#projects" className={styles.navLink} onClick={() => {setHamburgerOpen(false); setVisible(false)}}><span className={styles.listNum}>03.</span> Projects</a>
              </motion.li>
              <motion.li className={styles.navItem}
                variants={item}>
                  <a href="#contact" className={styles.navLink} onClick={() => {setHamburgerOpen(false); setVisible(false)}}><span className={styles.listNum}>04.</span> Contact</a>
              </motion.li>
              <motion.li className={styles.navItem}
                variants={item}>
                <a target="_blank" rel="noopener noreferrer" href="/files/Jeffrey Tan CV 2021.pdf" className={styles.resumeBtn}>Resume</a>
              </motion.li>
        </motion.ul>
        <div className={styles.hamburger} >
          {
            hamburgerOpen ?
            <AiOutlineClose onClick={() => setHamburgerOpen(false)}/>
            :
            <AiOutlineMenu onClick={() => setHamburgerOpen(true)}/>
          }
            
        </div>
      </div>
      
        <AnimatePresence>
          {
          hamburgerOpen &&
            <motion.ul className={styles.navMenuMobile}
            initial="hidden"
            animate="show"
            variants={mobileContainer}
            exit={{ opacity: 0, x: 600}}
            transition={{ duration: 0.3 }}
            >
              <motion.li className={styles.navItem}
                variants={item}
              >
                  <a href="#about" className={styles.navLink} onClick={() => {setHamburgerOpen(false)}}><span className={styles.listNum}>01.</span> About</a>
              </motion.li>
              <motion.li className={styles.navItem}
                variants={item}>
                  <a href="#experience" className={styles.navLink} onClick={() => {setHamburgerOpen(false)}}><span className={styles.listNum}>02.</span> Experience</a>
              </motion.li>
              <motion.li className={styles.navItem}
                variants={item}>
                  <a href="#projects" className={styles.navLink} onClick={() => {setHamburgerOpen(false)}}><span className={styles.listNum}>03.</span> Projects</a>
              </motion.li>
              <motion.li className={styles.navItem}
                variants={item}>
                  <a href="#contact" className={styles.navLink} onClick={() => {setHamburgerOpen(false)}}><span className={styles.listNum}>04.</span> Contact</a>
              </motion.li>
              <motion.li className={styles.navItem}
                variants={item}>
                <a target="_blank" rel="noopener noreferrer" href="/files/Jeffrey Tan CV 2021.pdf" className={styles.resumeBtn}>Resume</a>
              </motion.li>
            </motion.ul>
          }
        </AnimatePresence>
      
    </nav>

  )

  
}
