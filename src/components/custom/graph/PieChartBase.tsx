import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface PieChartBaseProps {
  data: ChartData<'pie'>;
  options?: ChartOptions<'pie'>;
}

export const PieChartBase = ({ data, options }: PieChartBaseProps) => {
  return <Pie data={data} options={options} />;
};
