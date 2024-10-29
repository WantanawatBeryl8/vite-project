import { Button } from '@/components/ui/button';
import { useAddTodo } from '@/core/services/hooks/useAddTodo';

function CreateTodoPage() {
  // example
  const { mutate: addTodo } = useAddTodo();

  const handleClick = () => {
    addTodo({ title: 'new todo', complete: false });
  };

  return <Button onClick={handleClick}>add Todo</Button>;
}

export default CreateTodoPage;
