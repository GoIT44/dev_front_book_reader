import React from "react";
import styles from "./TitleSection.module.css";

const TitleSection = () => {
  return (
    <div className={styles.section__titleWrap}>
      <h2 className={styles.section__title}>Моє тренування</h2>
    </div>
  );
};

export default TitleSection;
