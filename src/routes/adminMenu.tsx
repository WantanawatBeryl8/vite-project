import { siteMap } from '@/core/utils';
import loadable from '@loadable/component';
import { RouteObject } from 'react-router-dom';

export const adminMenuRouter: RouteObject[] = [
  {
    path: siteMap.adminMenu.reportConfiguration,
    Component: loadable(() => import('@/pages/adminMenu/ReportConfiguration')),
  },
];
