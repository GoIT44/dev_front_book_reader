// import React from "react";

import SideBarMyGoal from "../SideBarMyGoal/SideBarMyGoal";
import Form from "../Form/Form";
import Booklist from "../BookList/Booklist";
import styles from "./StartTrainingForm.module.css";

// import FormMob from "./FormMob/FormMob";
// import useMedia from "../hooks/useMedia";

const StartTrainingForm = () => {
  // const { MOB } = useMedia();
  return (
    <form>
      <div className={styles.section__centeredWrap}>
        <SideBarMyGoal />
        {/* <div className={styles.flex__position}>
          если MOB и modalIsOpen тогда = FormMob || Form
          <Form />
          <FormMob />
          <Booklist />
        </div> */}
      </div>
      {/* рендерить кнопку по условию, если books.length < 1 */}
      <div className={styles.btn__wrap}>
        <button className={styles.btn}>Почати тренування</button>
      </div>
    </form>
  );
};

export default StartTrainingForm;
