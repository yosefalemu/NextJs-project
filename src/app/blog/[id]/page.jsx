import React from "react";
import styles from "./page.module.css";
import { items } from "@/app/portfolio/[category]/data";
import { notFound } from "next/navigation";

const getItem = (id) => {
  const tempItem = items["applications"];
  const finalItem = tempItem.filter((item) => item.id == id);
  if (finalItem) {
    return finalItem;
  } else {
    return notFound();
  }
};

const BlogPosts = ({ params }) => {
  const item = getItem(params.id);
  return <div className={styles.container}>{item[0]?.desc}</div>;
};

export default BlogPosts;
