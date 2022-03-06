import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import styles from "./../styles/PostCard.module.css";

interface Props {
  post: any;
}

export default function PostCard({ post }: Props): ReactElement {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <div className={styles.card}>
        <Image
          src={post.frontmatter.card_image}
          alt={post.frontmatter.title}
          width={300}
          height={200}
          quality={90}
          objectFit="contain"
          className={styles.img}
        />

        <p className={styles.date}>{post.frontmatter.date}</p>
        <h3 className={styles.title}>{post.frontmatter.title}</h3>
        <p className={styles.excerpt}>{post.frontmatter.excerpt}</p>
      </div>
    </Link>
  );
}
