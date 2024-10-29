import { siteMap } from '@/core/utils';
import loadable from '@loadable/component';
import { RouteObject } from 'react-router-dom';

export const searchRouter: RouteObject[] = [
  {
    path: siteMap.search,
    Component: loadable(() => import('@/pages/search')),
  },
];
