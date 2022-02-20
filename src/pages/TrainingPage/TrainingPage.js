// import React from 'react'
import TrainingSection from "../../components/TrainingSection/TrainingSection";
import Navbar from "../../components/Navbar/Navbar.jsx";
import styles from "./TrainingPage.module.css";

const TrainingPage = () => {
  return (
    <>
      <div className={styles.container}>
        <TrainingSection />
      </div>
    </>
  );
};

export default TrainingPage;
