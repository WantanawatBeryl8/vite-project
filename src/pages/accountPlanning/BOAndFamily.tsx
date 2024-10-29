import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function BOAndFamilyPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>BO & Family</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
    </div>
  );
}

export default BOAndFamilyPage;
