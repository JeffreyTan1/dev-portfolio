import React, { ReactElement, useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {}

function debounce(func: Function, wait: number, immediate?: any) {
  var timeout: NodeJS.Timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default function NavBar({}: Props): ReactElement {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [shadow, setShadow] = useState(false);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > window.innerHeight * 0.1) ||
        currentScrollPos < window.innerHeight * 0.1
    );
    setShadow(currentScrollPos !== 0);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const mobileContainer = {
    hidden: { opacity: 0, x: 600 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        duration: 0.2,
      },
    },
  };

  const webContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.13,
        delayChildren: 0.3,
        duration: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className={`${styles.navBar} ${shadow ? styles.navShadow : ""}`}
      style={{ top: visible || hamburgerOpen ? "0" : "-6rem" }}
    >
      <div className={styles.navBarContent}>
        <Link href="/">
          <a className={styles.navLogo}>
            <Image src="/images/logo.svg" alt="logo" height={60} width={60} />
          </a>
        </Link>

        <motion.ul
          className={styles.navMenuWeb}
          initial="hidden"
          animate="show"
          variants={webContainer}
        >
          <motion.li className={styles.navItem} variants={item}>
            <Link href="/#about">
              <a className={styles.navLink}>About</a>
            </Link>
          </motion.li>

          <motion.li className={styles.navItem} variants={item}>
            <Link href="/#projects">
              <a className={styles.navLink}>Projects</a>
            </Link>
          </motion.li>
          <motion.li className={styles.navItem} variants={item}>
            <Link href="/#blog">
              <a className={styles.navLink}>Blog</a>
            </Link>
          </motion.li>
          <motion.li className={styles.navItem} variants={item}>
            <Link href="/#experience">
              <a className={styles.navLink}>Experience</a>
            </Link>
          </motion.li>
          <motion.li className={styles.navItem} variants={item}>
            <Link href="/#contact">
              <a className={styles.navLink}>Contact</a>
            </Link>
          </motion.li>
          <motion.li className={styles.navItem} variants={item}>
            <Link href="/docs/Jeffrey Tan CV.pdf">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={styles.fileBtn}
              >
                Resume
              </a>
            </Link>
          </motion.li>
        </motion.ul>
        <div className={styles.hamburger}>
          {hamburgerOpen ? (
            <AiOutlineClose onClick={() => setHamburgerOpen(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setHamburgerOpen(true)} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {hamburgerOpen && (
          <motion.ul
            className={styles.navMenuMobile}
            initial="hidden"
            animate="show"
            variants={mobileContainer}
            exit={{ opacity: 0, x: 600 }}
            transition={{ duration: 0.3 }}
          >
            <motion.li className={styles.navItem} variants={item}>
              <Link href="/#about">
                <a
                  className={styles.navLink}
                  onClick={() => {
                    setHamburgerOpen(false);
                  }}
                >
                  About
                </a>
              </Link>
            </motion.li>

            <motion.li className={styles.navItem} variants={item}>
              <Link href="/#projects">
                <a
                  className={styles.navLink}
                  onClick={() => {
                    setHamburgerOpen(false);
                  }}
                >
                  Projects
                </a>
              </Link>
            </motion.li>
            <motion.li className={styles.navItem} variants={item}>
              <Link href="/#blog">
                <a
                  className={styles.navLink}
                  onClick={() => {
                    setHamburgerOpen(false);
                  }}
                >
                  Blog
                </a>
              </Link>
            </motion.li>
            <motion.li className={styles.navItem} variants={item}>
              <Link href="/#experience">
                <a
                  className={styles.navLink}
                  onClick={() => {
                    setHamburgerOpen(false);
                  }}
                >
                  Experience
                </a>
              </Link>
            </motion.li>
            <motion.li className={styles.navItem} variants={item}>
              <Link href="/#contact">
                <a
                  className={styles.navLink}
                  onClick={() => {
                    setHamburgerOpen(false);
                  }}
                >
                  Contact
                </a>
              </Link>
            </motion.li>
            <motion.li className={styles.navItem} variants={item}>
              <Link href="/docs/Jeffrey Tan CV.pdf">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fileBtn}
                >
                  Resume
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
