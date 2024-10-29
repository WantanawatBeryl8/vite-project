import { siteMap } from '@/core/utils';
import loadable from '@loadable/component';
import { RouteObject } from 'react-router-dom';

export const reportRouter: RouteObject[] = [
  {
    path: siteMap.report.index,
    Component: loadable(() => import('@/pages/report')),
  },
];
