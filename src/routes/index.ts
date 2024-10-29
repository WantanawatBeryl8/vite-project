import { createBrowserRouter } from 'react-router-dom';
import { publicRouter } from './public';
import { mainRouter } from './main';
import { NotFound } from '@/pages';
import { accountPlanningRouter } from './accountPlanning';
import { customerInformationRouter } from './customerInformation';
import { reportRouter } from './report';

// split the routes by module
const router = createBrowserRouter([
  ...publicRouter,
  ...mainRouter,
  ...accountPlanningRouter,
  ...customerInformationRouter,
  ...reportRouter,
  {
    path: '*',
    Component: NotFound,
  },
]);

export { router };
