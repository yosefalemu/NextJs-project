import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";

const getPost = async (id) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};
const getPostedUser = async (username) => {
  const res = await fetch(`http://localhost:3000/api/auth/${username}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid lightgray",
  objectFit: "cover",
};

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPosts = async ({ params }) => {
  const post = await getPost(params.id);
  const postUserName = await getPostedUser(post.username);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>
          <div className={styles.postedUser}>
            <Image
              src={postUserName[0].profilepicture}
              width={45}
              height={45}
              style={imageStyle}
              alt="Detail Image"
            />
            <p className={styles.username}>{post.username}</p>
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              fill={true}
              alt="DetailImage"
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPosts;
