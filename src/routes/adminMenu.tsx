import { siteMap } from '@/core/utils';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const adminMenuRouter: RouteObject[] = [
  {
    path: siteMap.adminMenu.reportConfiguration,
    Component: lazy(() => import('@/pages/adminMenu/ReportConfiguration')),
  },
];
