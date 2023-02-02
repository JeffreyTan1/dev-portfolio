import React, { ReactElement, useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {}

export default function NavBar({}: Props): ReactElement {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // this works but doesn't account for padding
  // useEffect(() => {
  //   let prevScrollPos = window.pageYOffset;
  //   window.onscroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (prevScrollPos > currentScrollPos) {
  //       setVisible(true);
  //     } else {
  //       setVisible(false);
  //     }
  //     prevScrollPos = currentScrollPos;
  //   };
  // }, []);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos + 15) {
        setVisible(true);
      } else if (
        prevScrollPos < currentScrollPos - 15
      ) {
        setVisible(false);
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);






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
      className={`${styles.navBar} ${!visible ? styles.navShadow : ""}`}
      style={{ top: visible || hamburgerOpen ? "0" : "-6rem" }}
    >
      <div className={styles.navBarContent}>
        <Link href="/">
          <a className={styles.navLogo}>
            <Image
              src="/images/JEFFREYTAN.DEV.svg"
              alt="logo"
              height={60}
              width={250}
            />
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
            <Link href="/#experience">
              <a className={styles.navLink}>Experience</a>
            </Link>
          </motion.li>
          <motion.li className={styles.navItem} variants={item}>
            <Link href="/#blog">
              <a className={styles.navLink}>Blog</a>
            </Link>
          </motion.li>
          <motion.li className={styles.navItem} variants={item}>
            <Link href="/#projects">
              <a className={styles.navLink}>Projects</a>
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
