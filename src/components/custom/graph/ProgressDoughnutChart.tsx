import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
  ChartOptions,
} from 'chart.js';
import { DoughnutChartBaseProps, DoughnutChartBase } from './DoughnutChartBase';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface ProgressDoughnutChartProps {
  progress: number;
  fontSize: number;
  positionY: number;
  options?: ChartOptions<'doughnut'>;
}

export const ProgressDoughnutChart = ({
  progress,
  fontSize,
  positionY,
  options,
}: ProgressDoughnutChartProps) => {
  const centerTextPlugin: Plugin = {
    id: 'centerText',
    beforeDraw(chart) {
      const { width, height, ctx } = chart;

      ctx.restore();
      ctx.font = `${fontSize}px sans-serif`;
      ctx.textBaseline = 'middle';

      const text = `${progress}%`;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2 + positionY;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  ChartJS.register(centerTextPlugin);

  const data: DoughnutChartBaseProps['data'] = {
    labels: ['Progress', 'Remaining'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#4CAF50', '#D3D3D3'],
        hoverBackgroundColor: ['#4CAF50', '#D3D3D3'],
        borderWidth: 0,
      },
    ],
  };

  const defaultOptions: DoughnutChartBaseProps['options'] = {
    ...options,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return <DoughnutChartBase data={data} options={defaultOptions} />;
};
