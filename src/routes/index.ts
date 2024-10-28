import { createBrowserRouter } from 'react-router-dom';
import { publicRouter } from './public';
import { mainRouter } from './main';
import { NotFound } from '@/pages';

// split the routes by module
const router = createBrowserRouter([
  ...publicRouter,
  ...mainRouter,
  {
    path: '*',
    Component: NotFound,
  },
]);

export { router };
