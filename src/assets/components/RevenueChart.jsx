import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip
);



const RevenueChart = () => {
      const { theme } = useTheme();
    const isDark = theme === 'dark';
    const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Blue Wave',
      data: [10, 18, 18, 12, 14, 24],
      fill: true,
      borderColor: '#A8C5DA',
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
   const gradient = ctx.createLinearGradient(0, 0, 0, 300);
   gradient.addColorStop(0, '#A8C5DA20'); 
          gradient.addColorStop(0.5, 'rgba(168,197,218,0)');  
          gradient.addColorStop(1, 'rgba(168,197,218,0)');
        return gradient;
      },
      tension: 0.35,
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      label: 'Black Line',
      data: [15, 11, 11, 15, 20, 22],
      fill: false,
      borderColor: isDark ? '#C6C7F8' :'#000000',
      borderWidth: 3,
      borderDash: (ctx) => {
      
        const index = ctx.p0DataIndex;
        return index >= 3 ? [6, 6] : [];
      },
      segment: {
        borderDash: (ctx) => {
          return ctx.p0DataIndex >= 3 ? [6, 6] : [];
        },
      },
      tension: 0.35,
      pointRadius: 0,
    },
  ],
};


const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
 y: {
   beginAtZero: true,
   max: 30,
   ticks: {
     stepSize: 10, // Controls tick intervals (0, 10, 20, 30)
     callback: (value) => {
       // Only show these specific ticks
       if ([0, 10, 20, 30].includes(value)) {
         return value === 0 ? '0' : `${value}M`;
       }
       return ''; // Hide all other values
     },
     font: {
       size: 12,
       weight: 400
     },
     color: isDark? '#FFFFFF66':'#1C1C1C66',
      // padding: { right: 15 }
      padding: 15
      
   },
   grid: {
    
     drawTicks: false,
     drawBorder: false,
     color: (context) => {
            if (context.tick.value === 0) {
              return isDark ? '#FFFFFF1A' : '#1C1C1C33';
            }
            return isDark ? '#FFFFFF33' : '#1C1C1C0D';
     },
     lineWidth: (context) => {
       return context.tick.value === 0 ? 2 : 1;
     }
   },
   border: {
     display: false
   }
 },
    x: {
      offset: true,
      grid: { display: false },
      ticks: {
        color: isDark?'#FFFFFF66':'#1C1C1C66',
        font: {
          size: 12,
          weight: 400,
        },
      },
    },
    
  },
};
  return (
    <div >

          <div className='w-full h-[230px]'>
            <Line data={data} options={options} />
          </div>
      
    </div>
  );
};

export default RevenueChart;
