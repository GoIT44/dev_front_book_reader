import React from "react";
import useMedia from "../../hooks/useMedia";
import TitleSection from "./TitleSection/TitleSection";
import TrainingPeriodBlock from "./TrainingPeriodBlock/TrainingPeriodBlock";
import BookSelect from "./BookSelect/BookSelect";
import styles from "./Form.module.css";

const Form = () => {
  const { MOB } = useMedia();
  
  const onSubmitTraining = ()=>{

  }
  return (
    !MOB && (
      <>
        <TitleSection />
        {/* <form onSubmit={onSubmitTraining}> */}
        <TrainingPeriodBlock />
          <div className={styles.flex__centered}>
            <BookSelect />
            
          </div>
        {/* </form> */}
      </>
    )
  );
};

export default Form;
