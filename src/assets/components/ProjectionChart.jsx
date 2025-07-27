
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '../context/ThemeContext';


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ProjectionChart = () => {

    const { theme } = useTheme();
    const isDark = theme === 'dark';
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actual',
        data: [18, 20, 19, 22, 14, 19],
        backgroundColor: isDark ? '#A8C5DA': '#A8C5DA',
       barThickness: 20,
        borderRadius: 4,
        stack: 'Stack 0'
      },
      {
        label: 'Projection',
        data: [5, 7, 6, 6, 5, 6],
        backgroundColor: isDark ? '#677680':'#E5ECF6',
        barThickness: 20,
        borderRadius: 4,
        stack: 'Stack 0'
      }
    ]
  };

  const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: false
    },
    legend: {
      display: false
    }
  },
  hover: {
    mode: null
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 12,
          weight: 400
        },
        // padding: 10,
        color: isDark? '#FFFFFF66' : '#1C1C1C66'
      }
    },
y: {
  stacked: true,
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
    color: isDark? '#FFFFFF66' : '#1C1C1C66',
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
}

  }
};

  return (
    <div className='w-full'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProjectionChart;
