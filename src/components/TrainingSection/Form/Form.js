import React from "react";
import BookSelect from "./BookSelect/BookSelect";
import TrainingPeriodBlock from "./TrainingPeriodBlock/TrainingPeriodBlock";
import styles from "./Form.module.css";

const TrainingForm = () => {
  return (
    <>
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

export default TrainingForm;
