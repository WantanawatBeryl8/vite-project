import { axios } from '@/core/utils';
import { IApi } from '@/core/constants';

const fetch = async <T = any>(
  api: IApi,
  body?: {
    id?: string | number;
    payload?: any;
    headers?: any;
  },
): Promise<T> => {
  const { method = 'GET', url = '' } = api;
  const { id = '', payload = {}, headers } = body ?? {};
  return await (async () => {
    try {
      const response = await axios({
        method,
        headers,
        url: url + `/${id}`,
        ...(['GET', 'DELETE'].includes(method)
          ? { params: payload }
          : { data: payload }),
      });

      if (response) {
        return response.data;
      } else {
        throw new Error('No data');
      }
    } catch (error: any) {
      if (typeof window !== 'undefined') {
        throw new Error(error?.message);
      } else {
        throw error;
      }
    }
  })();
};

export default fetch;
