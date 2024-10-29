import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function SMEBusinessPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>SME Business</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
    </div>
  );
}

export default SMEBusinessPage;
