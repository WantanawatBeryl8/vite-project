import { LayoutMain } from '@/components/custom/layouts/LayoutMain';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const navigate = useNavigate();

  return (
    <LayoutMain>
      <div>
        <h1>Search</h1>
        <Button onClick={() => navigate('/portal')}>Back</Button>
      </div>
    </LayoutMain>
  );
}

export default SearchPage;
