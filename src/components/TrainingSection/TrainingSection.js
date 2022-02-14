// import { dividerClasses } from "@mui/material";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

import Booklist from "./BookList/Booklist";
// import ResultBox from "../../example/ResultBox";

// import Box from "@mui/material/Box";
// import { ReactComponent as ReactLogo } from "../../images/training_page_icons/arrow-back.svg";
// import TrainingPeriodBlock from "./TrainingForm/TrainingPeriodBlock/TrainingPeriodBlock";
// import styles from "./TrainingSection.module.css";
// import BookSelect from "./TrainingForm/BookSelect/BookSelect";

// const initialState = { startDate: "", finishDate: "" };

const TrainingSection = () => {
  return (
    // <Box
    //   sx={{
    //     width: {
    //       mobile: "100%",
    //     },
    //     height: "100%",
    //   }}
    // >
    //   <section className={styles.section}>
    //     <button className={styles.btn__back}>
    //       <div className={styles.svg__wrap}>
    //         <ReactLogo />
    //       </div>
    //     </button>
    //     <div className={styles.section__centeredWrap}>
    //       <div className={styles.section__titleWrap}>
    //         <h2 className={styles.section__title}>My training</h2>
    //       </div>
    //       <TrainingPeriodBlock />
    //       <BookSelect />
    //     </div>
    //   </section>
    // </Box>
    <>
      <Booklist />
      {/* <ResultBox /> */}
    </>
  );
};

export default TrainingSection;
