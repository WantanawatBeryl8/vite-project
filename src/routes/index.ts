import { createBrowserRouter } from 'react-router-dom';
import { publicRouter } from './public';
import { mainRouter } from './main';
import { accountPlanningRouter } from './accountPlanning';
import { customerInformationRouter } from './customerInformation';
import { reportRouter } from './report';
import { adminMenuRouter } from './adminMenu';
import { searchRouter } from './search';
import loadable from '@loadable/component';

// split the routes by module
const router = createBrowserRouter([
  {
    Component: loadable(() => import('@/components/custom/ProtectRoute')),
    children: [
      ...mainRouter,
      ...accountPlanningRouter,
      ...customerInformationRouter,
      ...reportRouter,
      ...adminMenuRouter,
      ...searchRouter,
    ],
  },
  ...publicRouter,
  {
    path: '*',
    Component: loadable(() => import('@/pages/404')),
  },
]);

export { router };
