import ProgressDoughnutChart from '@/components/custom/graph/ProgressDoughnutChart';
import { Button } from '@/components/ui/button';
import { siteMap } from '@/core/utils';
import { useNavigate } from 'react-router-dom';

function CustomerInformationPage() {
  const navigate = useNavigate();

  const options = {
    responsive: true,
    rotation: -135,
    circumference: 270,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <h1>Customer Information Page</h1>
      <Button
        className="m-4 flex"
        onClick={() => navigate(siteMap.portal)}
        variant="default"
      >
        Back
      </Button>
      <div>
        <h1>Doughnut Chart</h1>
        <ProgressDoughnutChart progress={75} options={options} />
      </div>
    </div>
  );
}

export default CustomerInformationPage;
