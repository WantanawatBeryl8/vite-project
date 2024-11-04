import { Button } from '@/components/ui/button';
import { signIn } from '@/core/utils';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('access_token')) {
      navigate('/portal', { replace: true });
    }
  }, [navigate]);

  return (
    <div>
      <Button
        className="m-4 flex bg-background-slip-purple"
        onClick={() => {
          signIn(
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            '',
          );
          window.location.reload();
        }}
      >
        login
      </Button>
    </div>
  );
}

export default LoginPage;
