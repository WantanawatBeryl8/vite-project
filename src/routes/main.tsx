import { siteMap } from '@/core/utils';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PortalPage = lazy(() => import('@/pages/Portal'));

// protect router
export const mainRouter: RouteObject[] = [
  {
    path: siteMap.portal,
    element: <PortalPage />,
  },
];
