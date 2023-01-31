import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import styles from "./../../styles/PostPage.module.css";
import Head from "next/head";

type Props = {
  frontmatter: any;
  slug: string;
  content: any;
};

export default function PostPage({
  frontmatter: { title, date, banner_image, keywords, excerpt },
  content,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords.toString()} />
        <meta name="description" content={excerpt} />
      </Head>

      <NavBar />

      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>{date}</p>
        <Image
          src={banner_image}
          alt={title}
          layout="responsive"
          width={848}
          height={250}
          quality={100}
        />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
