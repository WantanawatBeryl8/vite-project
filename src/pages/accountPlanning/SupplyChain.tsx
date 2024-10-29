import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function SupplyChainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Supply Chain</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
    </div>
  );
}

export default SupplyChainPage;
