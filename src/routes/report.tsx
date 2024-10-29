import { siteMap } from '@/core/utils';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const reportRouter: RouteObject[] = [
  {
    path: siteMap.report.index,
    Component: lazy(() => import('@/pages/report')),
  },
];
