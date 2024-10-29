import { siteMap } from '@/core/utils';
import loadable from '@loadable/component';
import { RouteObject } from 'react-router-dom';

// protect router
const mainRouter: RouteObject[] = [
  {
    path: siteMap.portal,
    Component: loadable(() => import('@/pages/Portal')),
  },
];

export { mainRouter };
