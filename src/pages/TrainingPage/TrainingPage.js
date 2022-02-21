// import React from 'react'
import TrainingSection from "../../components/TrainingSection/TrainingSection";
import Navbar from "../../components/Navbar/Navbar.jsx";
import styles from "./TrainingPage.module.css";
import {SideBarStatistics} from '../../components/SideBarStatistics/SideBarStatistics'
import SideBarMyGoal from "../../components/TrainingSection/SideBarMyGoal/SideBarMyGoal";
import Booklist from "../../components/TrainingSection/BookList/Booklist";
import Chart from "../../components/TrainingSection/Chart/Chart";
import TrainingPeriodBlock from "../../components/TrainingSection/TrainingPeriodBlock/TrainingPeriodBlock";
import BookSelect from "../../components/TrainingSection/BookSelect/BookSelect";
import TitleSection from "../../components/TrainingSection/Form/TitleSection/TitleSection";
import axios from "axios";
import {getLibraryInfo} from '../../services/bookApi';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookTrainingOperation } from "../../redux/trainingPlan/trainingPlanOperations";
import { getBookList, getDateTraining } from "../../redux/trainingPlan/trainingPlanSelectors";
import { addTraining } from "../../services/training";


const TrainingPage = () => {
  useEffect(async () => {
    const book = await getLibraryInfo()
    setBookSelect(book)
  }, [])
  const bookTrain = useSelector(getBookList)
  const dateTrain = useSelector(getDateTraining)
  const dispatch = useDispatch()
  const [bookSelect, setBookSelect] = useState([]) 
  const training = {
    startTrain: dateTrain.startTrain,
    endTrain: dateTrain.endTrain,
    booksTrain: bookTrain,
  }
  console.log(dateTrain)

  const sendTrain = async (e)=>{
    const res = addTraining(training)
    dispatch(addBookTrainingOperation())
    console.log(res)

  }
  
  
  const arrSelectBooks = bookSelect.filter((book)=>bookTrain.includes(book._id));

  

  
  return (
    <>
      <div className={styles.container}>
        <section className={styles.sectionAddTraining}>
          <div className={styles.grids}>
            <div className={styles.gridsSideBar}>
              <SideBarMyGoal/>
            </div>
            
            <div className={styles.gridsform}>
              <TitleSection/>
              <TrainingPeriodBlock/>
              <BookSelect bookSelect={bookSelect}/>
              <Booklist bookList={arrSelectBooks}/>
              <div className={styles.btn__wrap}>
                <button className={styles.btn} onClick={sendTrain}>Почати тренування</button>
              </div>
              <Chart/>
            </div>
          </div>
        </section>
        {/* <TrainingSection /> */}
      </div>
    </>
  );
};

export default TrainingPage;
