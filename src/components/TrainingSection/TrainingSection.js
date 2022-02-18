// import { dividerClasses } from "@mui/material";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import Booklist from "./BookList/Booklist";

// import ResultBox from "../../example/ResultBox";
// import TrainingModalBtn from "../TrainingModalBtn/TrainingModalBtn";

import Box from "@mui/material/Box";
import { ReactComponent as ReactLogo } from "../../images/training_page_icons/arrow-back.svg";
import Form from "./Form/Form";
import styles from "./TrainingSection.module.css";

// const initialState = { startDate: "", finishDate: "" };

const TrainingSection = () => {
  return (
    <>
      <section className={styles.section}>
        <button className={styles.btn__back}>
          <div className={styles.svg__wrap}>
            <ReactLogo />
          </div>
        </button>
        <div className={styles.section__centeredWrap}>
          <div className={styles.section__titleWrap}>
            <h2 className={styles.section__title}>Моє тренування</h2>
          </div>
          <div className={styles.flex__position}>
            <Form />
          </div>
        </div>
      </section>
      {/* <Booklist /> */}

      {/* <ResultBox /> */}
      {/* <TrainingModalBtn /> */}
    </>
  );
};

export default TrainingSection;
