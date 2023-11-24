import React from "react";
import styles from "./page.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/Components/Button/Button";

const getItem = (item) => {
  const data = items[item];
  if (data) {
    return data;
  } else {
    return notFound();
  }
};

const Category = ({ params }) => {
  const dataItems = getItem(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.charTitle}>{params.category}</h1>
      {dataItems.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={item.img} src={item.image} fill={true} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
