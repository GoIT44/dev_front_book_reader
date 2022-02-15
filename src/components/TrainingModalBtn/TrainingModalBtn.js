import React from "react";
import { ReactComponent as ReactLogoBtnMore } from "../../images/training_page_icons/more.svg";
import styles from "./TrainingModalBtn.module.css";

const TrainingModalBtn = () => {
  const onHandleClick = () => {};

  return (
    <div className={styles.centered}>
      <button
        type="button"
        className={styles.btn__more}
        onClick={onHandleClick}
      >
        <ReactLogoBtnMore />
      </button>
    </div>
  );
};

export default TrainingModalBtn;
