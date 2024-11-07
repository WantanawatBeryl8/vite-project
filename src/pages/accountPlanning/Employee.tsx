import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function EmployeePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Employee</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
      <div className="mt-4 text-red-500">// Headers</div>
      <h1>หัวข้อ(h1)</h1>
      <h2>หัวข้อ(h2)</h2>
      <h3>หัวข้อ(h3)</h3>
      <h4>หัวข้อ(h4)</h4>
      <h5>หัวข้อ(h5)</h5>
      <h6>หัวข้อ(h6)</h6>
      <div className="mt-4 text-red-500">// Paragraph</div>
      <p>ย่อหน้าปกติ(p)</p>
    </div>
  );
}

export default EmployeePage;
