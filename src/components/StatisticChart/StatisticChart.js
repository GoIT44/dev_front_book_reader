import React, { useEffect, useState } from 'react';
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
import { getAmountPage } from '../../redux/resultTraining/resultTrainingSelectors';


const StatisticChart = () => {
    const [arrPageOfDay, setArrPageOfDay] = useState([])
    const [arrAveragePageOfDay, setArrAveragePageOfDay] = useState([]);
    const statisticRes = useSelector(getAmountPage)
    useEffect(() => {
        setArrPageOfDay(statisticRes);
        setArrAveragePageOfDay((prev)=>[...prev, perDayPage])
        
    },[statisticRes])
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
    };
    const totalPage = 600 // общее количество страниц которое нужно прочитать
    const totalPageRead = arrPageOfDay.reduce((acc, item)=>{
        acc = acc + item;
        return acc
    }, 0);  // количество страниц которе прочитанно за период треновки
    
    const dateStart = new Date('2022-02-14') //дата начала
    const endDate = new Date('2022-02-20') // дата окончания
    const dayOfTraining = Math.floor((endDate-dateStart) / (1000 * 60 * 60 * 24)) // кол-во полных дней
    const perDayPage = (totalPage - totalPageRead) / (dayOfTraining - arrPageOfDay.length) // среднее кол-во страниц которое нужно прочитать 
    let arrDays = []
    for (let i = 1; arrDays.length < dayOfTraining; i++) {
        arrDays.push(i)
    } // массив для отрисовки оси х
    console.log('totalPageRead', totalPageRead)
    console.log('arrPageOfDay.length', arrPageOfDay.length)
    console.log('arrPageOfDay', arrPageOfDay)
    console.log('arrAveragePageOfDay', arrAveragePageOfDay)
    const labels = arrDays;

      const data = {
        labels,
        datasets: [
            {
                
            data: arrDays.map((day, idx) => arrPageOfDay[idx]),
            borderColor: '#242A37',
            backgroundColor: '#242A37',
            lineTension: 0.5,
          },
          {
            label: 'Dataset 2',
            data: arrDays.map((day, idx) => arrAveragePageOfDay[idx+1]),
            borderColor: '#FF6B08',
            backgroundColor: '#FF6B08',
          },
        ],
    };
    const chartRef = React.createRef()
    console.dir(chartRef)
    return (
      <div className={style.chartWrapper}>
        <h3 className={style.titleChart}>Кількість сторінок / день <span>34</span></h3>
        <Line ref={chartRef} options={options} data={data}/>
      </div>
    );
}

export default StatisticChart;