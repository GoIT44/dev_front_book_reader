import React from "react";
import ModalCloseBtn from "../ModalCloseBtn/ModalCloseBtn";
import TitleSection from "../TitleSection/TitleSection";
import TrainingPeriodBlock from "./TrainingPeriodBlock/TrainingPeriodBlock";
import BookSelect from "./BookSelect/BookSelect";
import styles from "./FormMob.module.css";

const FormMob = () => {
  return (
    <>
      <div className={styles.modalCloseBtn__wrap}>
        <ModalCloseBtn />
      </div>
      <TitleSection />
      <TrainingPeriodBlock />
      <div className={styles.flex__centered}>
        <BookSelect />
        <div className={styles.btn__wrap}>
          <button className={styles.btn__add}>Add</button>
        </div>
      </div>
    </>
  );
};

export default FormMob;
