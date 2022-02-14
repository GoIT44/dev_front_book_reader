import React from 'react';
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

const StatisticChart = () => {
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
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Кількість сторінок / день ',
          },
          line: {
              tension:0.5,
          }
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => 3),
            borderColor: '#242A37',
            backgroundColor: '#242A37',
            tension: 15,
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => 2),
            borderColor: '#FF6B08',
            backgroundColor: '#FF6B08',
          },
        ],
      };
    return (
        <Line options={options} data={data}/>
    );
}

export default StatisticChart;