import SideBarStatistics from "../../components/SideBarStatistics/SideBarStatistics";
import Timer from "../../components/Timer/Timer";
import Container from "../../components/Container/Container";
import ResultBox from "../../components/ResultBox/ResultBox";
import StatisticChart from "../../components/StatisticChart/StatisticChart";
import style from "./StatisticPage.module.css";
import Booklist from "../../components/BookList/Booklist";
import { useDispatch } from "react-redux";
// import { getTraining } from '../../redux/resultTraining/resultTrainingOperations';
import { useEffect } from "react";
import { getCurrentTraining } from "../../services/training";
import { getTrainingOperations } from "../../redux/training/trainingOperations";

const StatisticPage = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //     dispatch(getTrainingOperations());
  // }, [dispatch])
  return (
    <section>
      <Container>
        {/* <div className={style.grids}>
                    <div className={style.gridsTimer}>
                        <Timer/>
                        <div className={style.wrapperBookList}>
                            <Booklist/> 
                        </div>
                    </div>
                    <div className={style.gridsSideBar}>
                        <SideBarStatistics/>
                    </div>
                    <div className={style.gridsBookList}>
                        <Booklist/>  
                    </div>
                    <div className={style.gridsChart}>
                        <StatisticChart/>
                    </div>
                    <div className={style.gridsResultBox}>
                        <ResultBox/>
                    </div>
                </div> */}
      </Container>
    </section>
  );
};

export default StatisticPage;
