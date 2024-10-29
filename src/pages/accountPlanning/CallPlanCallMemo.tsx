import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function CallPlanCallMemoPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>CallPlan / CallMemo</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
    </div>
  );
}

export default CallPlanCallMemoPage;
