import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { width, height, ctx } = chart;
    const value = chart.config.data.datasets[0].data[0];

    ctx.restore();
    const fontSize = (height / 114).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';

    const text = `${value}%`;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

ChartJS.register(centerTextPlugin);

const ProgressDoughnutChart = ({ progress, options }) => {
  const data = {
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

  const defaultOptions = {
    ...options,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      centerText: centerTextPlugin,
    },
  };

  return <Doughnut data={data} options={defaultOptions} />;
};

export default ProgressDoughnutChart;
