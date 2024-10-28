import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { axios } from '@/core/utils';
import queryKey from './queryKey';
import { todoApi } from '@/core/services/apis';

export interface TodoItem {
  id: number;
  title: string;
  complete: boolean;
}

const fetchTodos = async (): Promise<AxiosResponse<TodoItem[], any>> => {
  return await axios<TodoItem[]>(todoApi.get);
};

export const useFetchTodos = (): QueryObserverResult<TodoItem[], any> => {
  return useQuery<TodoItem[], any>({
    queryFn: async () => {
      const { data } = await fetchTodos();
      return data;
    },
    queryKey: [queryKey.todos],
  });
};
