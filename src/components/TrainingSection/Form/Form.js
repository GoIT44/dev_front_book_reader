import React from "react";
import useMedia from "../../hooks/useMedia";
import TitleSection from "./TitleSection/TitleSection";
import TrainingPeriodBlock from "./TrainingPeriodBlock/TrainingPeriodBlock";
import BookSelect from "./BookSelect/BookSelect";
import styles from "./Form.module.css";

const Form = () => {
  const { MOB } = useMedia();
  return (
    !MOB && (
      <>
        <TitleSection />
        <TrainingPeriodBlock />
        <div className={styles.flex__centered}>
          <BookSelect />
          <div className={styles.btn__wrap}>
            <button className={styles.btn__add}>Додати</button>
          </div>
        </div>
      </>
    )
  );
};

export default Form;
