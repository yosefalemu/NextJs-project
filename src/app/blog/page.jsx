import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error while fetching data");
  }
  return res.json();
}

export const metadata = {
  title: "Enjoy blogs",
  description: "This is nextjs website for blog post",
};

const Blog = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Link
          href={`/blog/${post._id}`}
          className={styles.itemContainer}
          key={post._id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt={post.title}
              width={400}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
