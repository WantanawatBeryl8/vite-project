import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BasePieChart = ({ data, options }) => {
  return <Pie data={data} options={options} />;
};

export default BasePieChart;
