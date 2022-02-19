// import { dividerClasses } from "@mui/material";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

import StartTrainingForm from "./StartTrainingForm/StartTrainingForm";
import StatisticChart from "../StatisticChart/StatisticChart";
import ModalOpenBtn from "./ModalOpenBtn/ModalOpenBtn";
import useMedia from "../hooks/useMedia";
import styles from "./TrainingSection.module.css";

const TrainingSection = () => {
  const { MOB } = useMedia();
  return (
    <>
      <section className={styles.section}>
        <StartTrainingForm />
        <StatisticChart />
        {MOB && <ModalOpenBtn />}
      </section>
    </>
  );
};

export default TrainingSection;
