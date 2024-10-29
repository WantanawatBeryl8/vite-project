import { Button } from '@/components/ui/button';
import { siteMap } from '@/core/utils';
import { useNavigate } from 'react-router-dom';

function CustomerInformationPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Customer Information Page</h1>
      <Button
        className="m-4 flex"
        onClick={() =>
          navigate(siteMap.customerInformation.customerInformation)
        }
        variant="default"
      >
        Go to Customer Information Page
      </Button>
    </div>
  );
}

export default CustomerInformationPage;
