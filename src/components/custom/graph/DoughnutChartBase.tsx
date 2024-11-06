import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface DoughnutChartBaseProps {
  data: ChartData<'doughnut'>;
  options?: ChartOptions<'doughnut'>;
}

const DoughnutChartBase: React.FC<DoughnutChartBaseProps> = ({
  data,
  options,
}) => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChartBase;
