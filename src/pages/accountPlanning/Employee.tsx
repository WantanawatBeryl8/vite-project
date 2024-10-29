import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function EmployeePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Employee</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
    </div>
  );
}

export default EmployeePage;
