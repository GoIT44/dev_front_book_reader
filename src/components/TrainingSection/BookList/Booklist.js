import React from "react";
import { ReactComponent as ReactLogoFlat } from "../../../images/training_page_icons/flat.svg";
import { ReactComponent as ReactLogoDots } from "../../../images/training_page_icons/dots.svg";
import styles from "./Booklist.module.css";

const Booklist = () => {
  return (
    <div className={styles.booklist}>
      <div className={styles.container__flex}>
        <div className={styles.flatSvg__wrap}>
          <ReactLogoFlat />
        </div>
        <div className={styles.dotsSvg__wrap}>
          <ReactLogoDots />
        </div>
      </div>
      <div className={styles.container__flex}>
        <div className={styles.bookAuthor__title}>Author:</div>
        <div className={styles.dotsSvg__wrap}>
          <ReactLogoDots />
        </div>
      </div>
    </div>
  );
};

export default Booklist;
