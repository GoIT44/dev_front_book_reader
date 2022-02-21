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
import style from './Chart.module.css';

const Chart = () => {
    
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
 
    // let arrDays = []
    // for (let i = 1; arrDays.length < statisticRes.length; i++) {
    //     arrDays.push(i)
    // } 
    // const averagePage = Math.floor(totalPageNeedRead/diffDay) ;
    const labels = [1,2,3,4,5];
    // console.log(arrDays)
      const data = {
        labels,
        datasets: [
        //     {
        //     label: "Факт",
        //     data: labels.map((day, idx) => statisticRes[idx]),
        //     borderColor: '#242A37',
        //     backgroundColor: '#242A37',
        //     lineTension: 0.5,
        //   },
        //   {
        //     label: 'План',
        //     data: labels.map((day, idx) => averagePage),
        //     borderColor: '#FF6B08',
        //     backgroundColor: '#FF6B08',
        //   },
        ],
    };
    return (
      <div className={style.chartWrapper}>
        <h3 className={style.titleChart}>Кількість сторінок / день <span>0</span></h3>
        <Line options={options} data={data}/>
      </div>
    );
}

export default Chart;