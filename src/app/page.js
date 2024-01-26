/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h2>Happy Birthday, Cat :)</h2>
        <p>
          Because we're so far apart, I wanted to make something we could both
          interact with together. Here's Cat's RankThings, a web app that
          figures out what Cat cares about.
        </p>
        <Link className={styles.backButton} href="/rank">
          Click me to start
        </Link>
      </div>
    </main>
  );
}
