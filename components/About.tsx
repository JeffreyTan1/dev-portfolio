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
I'm Jeff, a full-stack Software Engineer from Melbourne, Australia, and I have a passion for elegant and robust software solutions.
`;

const paragraph2 = `
I have been programming for over 5 years now, and I have worked on a variety of projects ranging from small personal projects to large enterprise applications.
`;

const paragraph3 = `
In my spare time, I enjoy lifting weights, playing video games, and watching anime. I also enjoy learning new technologies and frameworks, and I am always looking for new opportunities to learn and grow.
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
  "/images/me-1.png",
  "/images/me-2.png",
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
        </div>
        <Toolkit />
      </motion.div>
    </Section>
  );
}
