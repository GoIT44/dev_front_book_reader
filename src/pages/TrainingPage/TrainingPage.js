// import React from 'react'
import styles from "./TrainingPage.module.css";
import SideBarMyGoal from "../../components/TrainingSection/SideBarMyGoal/SideBarMyGoal";
import Booklist from "../../components/TrainingSection/BookList/Booklist";
import Chart from "../../components/TrainingSection/Chart/Chart";
import TrainingPeriodBlock from "../../components/TrainingSection/TrainingPeriodBlock/TrainingPeriodBlock";
import BookSelect from "../../components/TrainingSection/BookSelect/BookSelect";
import TitleSection from "../../components/TrainingSection/Form/TitleSection/TitleSection";
import { getLibraryInfo } from "../../services/bookApi";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getBookList,
  getDateTraining,
} from "../../redux/trainingPlan/trainingPlanSelectors";
import { addTraining } from "../../services/training";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useHistory } from "react-router-dom";
import ModalOpenBtn from "../../components/TrainingSection/ModalOpenBtn/ModalOpenBtn";
import FormMob from "../../components/TrainingSection/FormMob/FormMob";

const TrainingPage = () => {
  useEffect(async () => {
    const book = await getLibraryInfo();
    setBookSelect(book);
  }, []);
  const [isHidden, setIsHidden] = useState(true);
  const history = useHistory();
  const bookTrain = useSelector(getBookList);
  const dateTrain = useSelector(getDateTraining);
  const [bookSelect, setBookSelect] = useState([]);
  const training = {
    startTrain: dateTrain.startTrain,
    endTrain: dateTrain.endTrain,
    booksTrain: bookTrain,
  };
  const amountDay = Math.floor(
    (new Date(dateTrain.endTrain) - new Date(dateTrain.startTrain)) /
      1000 /
      60 /
      60 /
      24
  );
  const sendTrain = async (e) => {
    try {
      const res = await addTraining(training);
      history.push("/statistic");
    } catch (error) {
      Notify.failure(error.message.message);
    }
  };
  const onClick = (e) => {
    setIsHidden((prev) => !prev);
  };

  const arrSelectBooks = bookSelect.filter((book) =>
    bookTrain.includes(book._id)
  );

  return (
    <>
      <div className={styles.container}>
        <section className={styles.sectionAddTraining}>
          <div className={styles.grids}>
            <div className={styles.gridsSideBar}>
              <SideBarMyGoal day={amountDay} book={bookTrain.length} />
            </div>

            <div className={styles.gridsform}>
              <div className={styles.wrapperForm}>
                <TitleSection />
                <TrainingPeriodBlock />
                <BookSelect bookSelect={bookSelect} />
              </div>
              <Booklist bookList={arrSelectBooks} />
              {typeof training.startTrain === "string" &&
                typeof training.endTrain === "string" &&
                !!training.booksTrain.length && (
                  <div className={styles.btn__wrap}>
                    <button className={styles.btn} onClick={sendTrain}>
                      ???????????? ????????????????????
                    </button>
                  </div>
                )}
              <Chart />
              <ModalOpenBtn onClick={onClick} />
              <FormMob
                onClick={onClick}
                bookSelect={bookSelect}
                isHidden={isHidden}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrainingPage;
