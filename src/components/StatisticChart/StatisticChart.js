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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import style from './StatisticChart.module.css';
import { useSelector } from 'react-redux';
import { endTraining, getAmountPage, getResultSelector, getTraining, pagesResultRead, startTraining, totalPages } from '../../redux/training/trainingSelectors';
// import { getAmountPage } from '../../redux/resultTraining/resultTrainingSelectors';

const StatisticChart = () => {
  const training = useSelector(getTraining);
    if (!training) return

    const resTraining = training.result;
    const totalPageNeedRead = training.totalPages;
    const timeStartTraining = training.startTrain;
    const timeEndTraining = training.endTrain;
    const diffDay = (new Date(timeEndTraining)-new Date(timeStartTraining)) / 1000/60/60/24;
    const statisticRes = resTraining.map((res)=>Number(res.pagesResult)) 
    // console.log(statisticRes)
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        );
        
        const options = {
            responsive: true,
            plugins: {
              legend: {
                display: false
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
 
    let arrDays = []
    for (let i = 1; arrDays.length < statisticRes.length; i++) {
        arrDays.push(i)
    } 
    const averagePage = Math.floor(totalPageNeedRead/diffDay) ;
    const labels = arrDays;
    // console.log(arrDays)
      const data = {
        labels,
        datasets: [
            {
            label: "Факт",
            data: arrDays.map((day, idx) => statisticRes[idx]),
            borderColor: '#242A37',
            backgroundColor: '#242A37',
            lineTension: 0.5,
          },
          {
            label: 'План',
            data: arrDays.map((day, idx) => averagePage),
            borderColor: '#FF6B08',
            backgroundColor: '#FF6B08',
          },
        ],
    };
    return (
      <div className={style.chartWrapper}>
        <h3 className={style.titleChart}>Кількість сторінок / день <span>{averagePage}</span></h3>
        <Line options={options} data={data}/>
      </div>
    );
}

export default StatisticChart;
