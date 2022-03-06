import React, { ReactElement } from "react";
import Section from "./Section";
import styles from "./../styles/BlogPreview.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PostCard from "./PostCard";
import Slider from "react-slick";

interface Props {
  posts: any;
}

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

export default function BlogPreview({ posts }: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const settings = {
    dots: true,
    infinite: posts.length > 3,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section id="blog">
      <motion.div
        className={styles.blogPreview}
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : ""}
        variants={container}
      >
        <motion.h2 variants={item}>Blog</motion.h2>
        <div className={styles.blogSlider}>
          <Slider {...settings}>
            {posts.map((post: any, index: React.Key) => (
              <motion.div key={index} variants={item}>
                <PostCard post={post} />
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </Section>
  );
}
