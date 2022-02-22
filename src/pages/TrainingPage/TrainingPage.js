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
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useHistory } from "react-router-dom";
import ModalOpenBtn from '../../components/TrainingSection/ModalOpenBtn/ModalOpenBtn';


const TrainingPage = () => {
  useEffect(async () => {
    const book = await getLibraryInfo()
    setBookSelect(book)
  }, [])
  const history = useHistory();
  const bookTrain = useSelector(getBookList)
  const dateTrain = useSelector(getDateTraining)
  const dispatch = useDispatch()
  const [bookSelect, setBookSelect] = useState([]) 
  const training = {
    startTrain: dateTrain.startTrain,
    endTrain: dateTrain.endTrain,
    booksTrain: bookTrain,
  }
  const amountDay = (new Date(dateTrain.endTrain)-new Date(dateTrain.startTrain)) / 1000/60/60/24;
  console.log(amountDay)
  const sendTrain = async (e)=>{
    try {
      const res = await addTraining(training)
      history.push('/statistic')
    } catch (error) {
      Notify.failure(error.message.message)
    }
    // dispatch(addBookTrainingOperation())
    
  }
  
  
  
  const arrSelectBooks = bookSelect.filter((book)=>bookTrain.includes(book._id));

  

  
  return (
    <>
      <div className={styles.container}>
        <section className={styles.sectionAddTraining}>
          <div className={styles.grids}>
            <div className={styles.gridsSideBar}>
              <SideBarMyGoal day={amountDay} book={bookTrain.length}/>
            </div>
            
            <div className={styles.gridsform}>
              <div className={styles.wrapperForm}>
                <TitleSection/>
                <TrainingPeriodBlock/>
                <BookSelect bookSelect={bookSelect}/>
              </div>
              <Booklist bookList={arrSelectBooks}/>
                {
                  typeof(training.startTrain) === "string" &&
                      typeof(training.endTrain) === "string" &&
                      !!training.booksTrain.length &&
                  <div className={styles.btn__wrap}>
                      <button className={styles.btn} onClick={sendTrain}>Почати тренування</button>
                  </div>
                }
              <Chart/>
              <ModalOpenBtn/>
            </div>
          </div>
        </section>
        {/* <TrainingSection /> */}
      </div>
    </>
  );
};

export default TrainingPage;
