import { siteMap } from '@/core/utils';
import loadable from '@loadable/component';
import { RouteObject } from 'react-router-dom';

export const customerInformationRouter: RouteObject[] = [
  {
    path: siteMap.customerInformation.boAndFamily,
    Component: loadable(() => import('@/pages/customerInformation/BOFamily')),
  },
  {
    path: siteMap.customerInformation.customerInformation,
    Component: loadable(
      () => import('@/pages/customerInformation/CustomerInformation'),
    ),
  },
  {
    path: siteMap.customerInformation.customerOverview,
    Component: loadable(
      () => import('@/pages/customerInformation/CustomerOverview'),
    ),
  },
  {
    path: siteMap.customerInformation.employee,
    Component: loadable(() => import('@/pages/customerInformation/Employee')),
  },
  {
    path: siteMap.customerInformation.treeView,
    Component: loadable(() => import('@/pages/customerInformation/TreeView')),
  },
];
