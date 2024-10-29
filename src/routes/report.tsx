import { siteMap } from '@/core/utils';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ReportPage = lazy(() => import('@/pages/report'));

export const reportRouter: RouteObject[] = [
  {
    path: siteMap.report.index,
    element: <ReportPage />,
  },
];
