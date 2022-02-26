import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
  post: any;
}

export default function PostCard({ post }: Props): ReactElement {
  return (
    <div>
      <Image
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
        width={300}
        height={200}
        unoptimized
        // className={styles.img}
        // priority={true}
      />

      <p>{post.frontmatter.date}</p>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a>Read More</a>
      </Link>
    </div>
  );
}
