import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/Components/Button/Button";

export const metadata = {
  title: "Contact us",
  description: "This is nextjs website for blog post",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/contact.png"
            alt=""
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="text" placeholder="email" className={styles.input} />
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="message"
              className={styles.textarea}
            />
            <Button text="Send" url={"#"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
