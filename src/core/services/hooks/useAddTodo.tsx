import {
  UseBaseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import queryKey from './queryKey';
import { axios } from '@/core/utils';
import { todoApi } from '@/core/services/apis';

export interface TodoInput {
  title: string;
  complete: boolean;
}

const addTodo = async (
  todo: TodoInput,
): Promise<AxiosResponse<TodoInput, any>> => {
  const config = { ...todoApi.add, data: todo };
  return await axios<TodoInput>(config);
};

export const useAddTodo = (): UseBaseMutationResult<
  AxiosResponse<TodoInput, any>,
  unknown,
  TodoInput,
  unknown
> => {
  const queryClient = useQueryClient();
  // for navigation
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (todo: TodoInput) => addTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.todos],
      });
      navigate('/', { replace: true });
    },
  });
};
