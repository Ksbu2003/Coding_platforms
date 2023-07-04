import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const LcChart = (Count) => {
  const data = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [Count["data"]["easySolved"], Count["data"]["mediumSolved"], Count["data"]["hardSolved"]], // Example data, replace with your actual data
        backgroundColor: ['#16FF00', '#F86F03', '#D21312'], // Example colors, you can customize as needed
      },
    ],
  };
   const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    cutout: '0%', // Adjust the radius here
    radius: '100%',
  };

  return <Pie data={data} options={options} />;
};

export default LcChart;
