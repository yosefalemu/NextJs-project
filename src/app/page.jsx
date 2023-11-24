import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/Components/Button/Button";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.image} />
      </div>
    </div>
  );
}
