import React from "react";
import { ReactComponent as ReactLogoBtnMore } from "../../../images/training_page_icons/more.svg";
import styles from "./ModalOpenBtn.module.css";

const TrainingModalBtn = ({onClick}) => {
  const onHandleClick = () => {};

  return (
    <div className={styles.centered}>
      <button
        type="button"
        className={styles.btn__more}
        onClick={onClick}
      >
        <ReactLogoBtnMore />
      </button>
    </div>
  );
};

export default TrainingModalBtn;
