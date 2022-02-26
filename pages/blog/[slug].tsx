import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/NavBar";

type Props = {
  frontmatter: any;
  slug: string;
  content: any;
};

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}: Props) {
  return (
    <div>
      <NavBar />
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <h1>{title}</h1>
      <p>{date}</p>
      <Image
        src={cover_image}
        alt={title}
        width={300}
        height={200}
        unoptimized
        // className={styles.img}
        // priority={true}
      />
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
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
