import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 MyApp. All rights reserved</div>
      <div className={styles.social}>
        <Link href={"https://t.me/ff_ss"}>
          <Image
            src="/tg.svg"
            width={30}
            height={30}
            className={styles.icon}
            alt="tg"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
