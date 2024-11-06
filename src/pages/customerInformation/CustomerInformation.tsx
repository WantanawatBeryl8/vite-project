import { BreadcrumbBase } from '@/components/custom/breadcrumb/BreadcrumbBase';
import {
  ProgressDoughnutChart,
  ProgressDoughnutChartProps,
} from '@/components/custom/graph/ProgressDoughnutChart';
import { Button } from '@/components/ui/button';
import { siteMap } from '@/core/utils';
import { useNavigate } from 'react-router-dom';

function CustomerInformationPage() {
  const navigate = useNavigate();

  const options: ProgressDoughnutChartProps['options'] = {
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

  const menus = [
    { name: 'Home', path: '/' },
    { name: 'Components', path: '/components' },
    { name: 'Breadcrumb' }, // หน้าเพจปัจจุบัน
  ];

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
        <h1>Progress Doughnut Chart</h1>
        <ProgressDoughnutChart
          progress={75}
          fontSize={30}
          positionY={15}
          options={options}
        />
      </div>
      <div>
        <h1>Breadcrumb Base</h1>
        <BreadcrumbBase menus={menus} />
      </div>
    </div>
  );
}

export default CustomerInformationPage;
