import React, { ReactElement } from "react";
import Section from "./Section";
import styles from "./../styles/About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Toolkit from "./Toolkit";
import Slider from "react-slick";

interface Props {}

const paragraph1 = `
I'm Jeff, a full-stack Software Engineer from Melbourne. I have experience building web and mobile apps using JavaScript. 
`;

const paragraph2 = `
I am obsessed with building beautiful UX/UI designs, but never shy away from building the odd back-end once in a while.
`;

const paragraph3 = `
Outside of programming, I am a big gamer. My game-stack consists of R6, Valorant, Rust, and Minecraft.
I am also an aspiring powerlifter and hope to compete soon.
`;

const paragraph4 = `
I swear I stumble across another popular library or framework every day. Here are some of the main technologies I have been using most recently:
`;

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  fade: true,
  cssEase: "linear",
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const images = [
  "/images/profile.png",
  "/images/lifting-min.png",
  "/images/lifting2-min.png",
];
export default function About({}: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Section id="about">
      <motion.div
        className={styles.about}
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : ""}
        variants={container}
      >
        <motion.div className={styles.imageCarousel} variants={item}>
          <Slider {...settings}>
            {images.map((image: any, index: React.Key) => (
              <div key={index} className={styles.imageContainer}>
                <Image
                  src={image}
                  alt="profile"
                  width={330}
                  height={350}
                  className={styles.image}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
        <div className={styles.content}>
          <motion.h2 variants={item}>About Me</motion.h2>
          <motion.p variants={item}>{paragraph1}</motion.p>
          <motion.p variants={item}>{paragraph2}</motion.p>
          <motion.p variants={item}>{paragraph3}</motion.p>
          <motion.p variants={item}>{paragraph4}</motion.p>
        </div>
        <Toolkit />
      </motion.div>
    </Section>
  );
}
