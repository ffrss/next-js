import Link from "next/link";
import styles from "./page.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}></Link>
        <Link href="/portfolio/websites" className={styles.item}></Link>
        <Link href="/portfolio/application" className={styles.item}></Link>
      </div>
    </div>
  );
};

export default Portfolio;
