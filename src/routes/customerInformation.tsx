import { siteMap } from '@/core/utils';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const customerInformationRouter: RouteObject[] = [
  {
    path: siteMap.customerInformation.boAndFamily,
    Component: lazy(() => import('@/pages/customerInformation/BOFamily')),
  },
  {
    path: siteMap.customerInformation.customerInformation,
    Component: lazy(
      () => import('@/pages/customerInformation/CustomerInformation'),
    ),
  },
  {
    path: siteMap.customerInformation.customerOverview,
    Component: lazy(
      () => import('@/pages/customerInformation/CustomerOverview'),
    ),
  },
  {
    path: siteMap.customerInformation.employee,
    Component: lazy(() => import('@/pages/customerInformation/Employee')),
  },
  {
    path: siteMap.customerInformation.treeView,
    Component: lazy(() => import('@/pages/customerInformation/TreeView')),
  },
];
