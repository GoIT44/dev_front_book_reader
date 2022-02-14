import React from "react";
import { ReactComponent as ReactLogoFlat } from "../../../images/training_page_icons/flat.svg";
import { ReactComponent as ReactLogoDots } from "../../../images/training_page_icons/dots.svg";
import styles from "./Booklist.module.css";

const Booklist = () => {
  return (
    <div className={styles.booklist__wrap}>
      <ul className={styles.booklist}>
        <li className={styles.book__list}>
          <div className={styles.ishidden__tab}>
            <div className={styles.container__flex}>
              <div className={styles.flatSvg__wrap}>
                <ReactLogoFlat />
              </div>
              <div className={styles.dotsSvg__wrap}>
                <ReactLogoDots />
              </div>
            </div>
          </div>
          <div className={styles.ishidden__mob}>
            <div className={styles.container__flex}>
              <div className={styles.bookAuthor__title}>
                Book title<span className={styles.twoDots}>:</span>
              </div>
              <div className={styles.dotsSvg__wrap}>
                <ReactLogoDots />
              </div>
            </div>
          </div>
          <div className={styles.container__flex}>
            <div className={styles.bookAuthor__title}>
              Author<span className={styles.twoDots}>:</span>
            </div>
            <div className={styles.dotsSvg__wrap}>
              <ReactLogoDots />
            </div>
          </div>
          <div className={styles.container__flex}>
            <div className={styles.bookYear__title}>
              Year<span className={styles.twoDots}>:</span>
            </div>
            <div className={styles.dotsSvg__wrap}>
              <ReactLogoDots />
            </div>
          </div>
          <div className={styles.container__flex}>
            <div className={styles.bookPages__title}>
              Pages<span className={styles.twoDots}>:</span>
            </div>
            <div className={styles.dotsSvg__wrap}>
              <ReactLogoDots />
            </div>
          </div>
        </li>
      </ul>
      <div className={styles.ishidden__mob}>
        <div className={styles.container__flex}>
          <div className={styles.flatSvg__wrap}>
            <ReactLogoFlat />
          </div>
          <div className={styles.dotsTab__visible}>
            <ReactLogoDots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booklist;
