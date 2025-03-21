import { CreateTodoPage, LoginPage } from '@/pages';
import { RouteObject } from 'react-router-dom';

export const publicRouter: RouteObject[] = [
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/add-todo',
    Component: CreateTodoPage,
  },
];
