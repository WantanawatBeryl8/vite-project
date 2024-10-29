import { Button } from '@/components/ui/button';
import { siteMap } from '@/core/utils';
import { useNavigate } from 'react-router-dom';

function BOFamilyPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>BO & FamilyPage</h1>
      <Button
        className="m-4 flex"
        onClick={() => navigate(siteMap.portal)}
        variant="default"
      >
        Back
      </Button>
    </div>
  );
}

export default BOFamilyPage;
