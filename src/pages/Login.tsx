import { Button } from '@/components/ui/button';
import { useFetchTodos } from '@/core/services/hooks/useFetchTodo';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { data: todos = [], isLoading } = useFetchTodos();
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Button
        className="m-4 flex"
        onClick={() => navigate('/add-todo')}
        variant="default"
      >
        Add Todo
      </Button>
      {todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default LoginPage;
