import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function ReportConfigurationPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Report Configuration</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
    </div>
  );
}

export default ReportConfigurationPage;
