import { AxiosRequestConfig } from 'axios';

const todoApi: {
  [key: string]: AxiosRequestConfig;
} = {
  get: {
    url: '/todos',
    method: 'GET',
  },
  add: {
    url: '/todos',
    method: 'POST',
  },
};

export { todoApi };
