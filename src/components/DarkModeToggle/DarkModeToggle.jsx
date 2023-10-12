"use client";

import { useContext } from "react";
import styles from "./darkModeToggle.module.scss";
import { ThemeContext } from "@/components/context/ThemeContext";

const DarkModeToggle = () => {
  // const mode = "light"
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
