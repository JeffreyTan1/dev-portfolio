import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";
import Socials from "../components/Socials";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import PostCard from "../components/PostCard";

interface Props {
  serviceID: string;
  templateID: string;
  userID: string;
  posts: any[];
}

const Home = ({ serviceID, templateID, userID, posts }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeffrey Tan Portfolio</title>
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact
          serviceID={serviceID}
          templateID={templateID}
          userID={userID}
        />
        <div>
          {posts.map((post, index) => {
            return <PostCard key={index} post={post} />;
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <Socials />
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
      serviceID: process.env.EMAILJS_SERVICE_ID,
      templateID: process.env.EMAILJS_TEMPLATE_ID,
      userID: process.env.EMAILJS_USER_ID,
    },
  };
}
