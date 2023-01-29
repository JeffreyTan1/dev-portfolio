import React, { FormEvent, ReactElement, useRef, useState } from "react";
import Section from "./Section";
import styles from "./../styles/Contact.module.css";
import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

init(process.env.EMAILJS_USER_ID);

interface Props {
  userID: string;
  serviceID: string;
  templateID: string;
}

const thankYouMessage = `
Thanks for getting in contact!
`;
const thankYouMessage2 = `
I will do my best to get back to you as soon as possible.
`;

const errorMessage = `
Something went wrong. Please try again.
`;
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
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Contact({
  userID,
  serviceID,
  templateID,
}: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const form = useRef<any>();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
      },
      (error) => {
        console.log(error.text);
        setSubmitted(true);
        setError(true);
      }
    );
  };

  return (
    <Section id="contact">
      <motion.div
        className={styles.contact}
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : ""}
        variants={container}
      >
        <h2>Contact Me</h2>
        {!submitted ? (
          <form ref={form} onSubmit={sendEmail}>
            <motion.div variants={item} className={styles.formGroup}>
              <label>Name</label>
              <input type="text" name="user_name" required />
            </motion.div>
            <motion.div variants={item} className={styles.formGroup}>
              <label>Email</label>
              <input type="email" name="user_email" required />
            </motion.div>
            <motion.div variants={item} className={styles.formGroup}>
              <label>Message</label>
              <textarea name="message" />
            </motion.div>
            <motion.button
              variants={item}
              type="submit"
              className={styles.sendBtn}
            >
              <FiSend style={{ position: "relative", top: "0.25rem" }} />
            </motion.button>
            {loading && <div className={styles.ldsdualring} />}
          </form>
        ) : error ? (
          <div>
            <h4>{errorMessage}</h4>
            <Image
              src="/gifs/sad.gif"
              alt="BMO nervous"
              width={500}
              height={300}
            />
          </div>
        ) : (
          <div>
            <h4>{thankYouMessage}</h4>
            <h4>{thankYouMessage2}</h4>
            <Image
              src="/gifs/happy.gif"
              alt="BMO dancing"
              width={600}
              height={400}
            />
          </div>
        )}
      </motion.div>
    </Section>
  );
}
