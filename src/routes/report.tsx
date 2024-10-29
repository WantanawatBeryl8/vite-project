import { siteMap } from '@/core/utils';
import ReportPage from '@/pages/report';
import { RouteObject } from 'react-router-dom';

export const reportRouter: RouteObject[] = [
  {
    path: siteMap.report.index,
    Component: ReportPage,
  },
];
