import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href={`/blog/${1}`} className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/1.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test Title</h1>
          <p className={styles.description}>Test description</p>
        </div>
      </Link>
      <Link href={`/blog/${2}`} className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/1.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tets Title</h1>
          <p className={styles.description}>Test description</p>
        </div>
      </Link>
      <Link href={`/blog/${3}`} className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/1.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tets Title</h1>
          <p className={styles.description}>Test description</p>
        </div>
      </Link>
      <Link href={`/blog/${1}`} className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/1.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tets Title</h1>
          <p className={styles.description}>Test description</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
