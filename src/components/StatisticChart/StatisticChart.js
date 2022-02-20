import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import style from "./StatisticChart.module.css";
import { useSelector } from "react-redux";
import {
  endTraining,
  getAmountPage,
  getResultSelector,
  pagesResultRead,
  startTraining,
  totalPages,
} from "../../redux/training/trainingSelectors";
// import { getAmountPage } from '../../redux/resultTraining/resultTrainingSelectors';

const StatisticChart = () => {
  const statisticRes = useSelector(getResultSelector).map((res) =>
    Number(res.pagesResult)
  );
  const [arrPageOfDay, setArrPageOfDay] = useState(statisticRes);
  const [arrAveragePageOfDay, setArrAveragePageOfDay] = useState([]);
  console.log(statisticRes);
  // useEffect(() => {
  //     setArrPageOfDay(statisticRes);
  //     setArrAveragePageOfDay((prev)=>[...prev, perDayPage])

  //   })
  const totalPageNeedRead = useSelector(totalPages);
  const totalPageRead = useSelector(pagesResultRead);
  const dateStart = useSelector(startTraining); //дата начала
  const endDate = useSelector(endTraining); //дата начала
  // const endDate = new Date('2022-02-20') // дата окончания
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },

      x: {
        ticks: {
          display: false,
        },
      },
    },
  };
  // const totalPage = 600 // общее количество страниц которое нужно прочитать
  // const totalPageRead = arrPageOfDay.reduce((acc, item)=>{
  //     acc = acc + item;
  //     return acc
  // }, 0);  // количество страниц которе прочитанно за период треновки

  const dayOfTraining = Math.floor(
    (new Date(endDate) - new Date(dateStart)) / 1000 / 60 / 60 / 24
  ); // кол-во полных дней
  const perDayPage =
    (totalPageNeedRead - totalPageRead) / (dayOfTraining - arrPageOfDay.length); // среднее кол-во страниц которое нужно прочитать
  let arrDays = [];
  for (let i = 1; arrDays.length < dayOfTraining; i++) {
    arrDays.push(i);
  } // массив для отрисовки оси х
  console.log(dayOfTraining);
  // for (statisticRes of stat){

  // }
  // console.log('totalPageRead', totalPageRead)
  // console.log('arrPageOfDay.length', arrPageOfDay.length)
  // console.log('arrPageOfDay', arrPageOfDay)
  // console.log('arrAveragePageOfDay', arrAveragePageOfDay)
  const labels = arrDays;
  const data = {
    labels,
    datasets: [
      {
        label: "Факт",
        data: arrPageOfDay.map((day, idx) => arrPageOfDay[idx]),
        borderColor: "#242A37",
        backgroundColor: "#242A37",
        lineTension: 0.5,
      },
      {
        label: "План",
        data: arrDays.map((day, idx) => arrAveragePageOfDay[idx + 1]),
        borderColor: "#FF6B08",
        backgroundColor: "#FF6B08",
      },
    ],
  };
  return (
    <div className={style.chartWrapper}>
      <h3 className={style.titleChart}>
        Кількість сторінок / день <span>34</span>
      </h3>
      <Line options={options} data={data} />
    </div>
  );
};

export default StatisticChart;
