export type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export interface IApi {
  url: string;
  method?: methodType;
  payload?: any;
}
