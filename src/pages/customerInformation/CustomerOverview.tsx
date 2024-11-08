import { LayoutMain } from '@/components/custom/layouts/LayoutMain';
import { Button } from '@/components/ui/button';
import { siteMap } from '@/core/utils';
import { useNavigate } from 'react-router-dom';

function CustomerOverviewPage() {
  const navigate = useNavigate();

  return (
    <LayoutMain>
      <div>
        <h1>Customer Overview Page</h1>
        <Button
          className="m-4 flex"
          onClick={() => navigate(siteMap.portal)}
          variant="default"
        >
          Back
        </Button>
      </div>
    </LayoutMain>
  );
}

export default CustomerOverviewPage;
