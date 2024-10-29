import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function ReportPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Report</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
    </div>
  );
}

export default ReportPage;
