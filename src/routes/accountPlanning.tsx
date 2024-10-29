import { siteMap } from '@/core/utils';
import loadable from '@loadable/component';
import { RouteObject } from 'react-router-dom';

export const accountPlanningRouter: RouteObject[] = [
  {
    path: siteMap.accountPlanning.callPlanCallMemo,
    Component: loadable(
      () => import('@/pages/accountPlanning/CallPlanCallMemo'),
    ),
  },
  {
    path: siteMap.accountPlanning.smeBUsiness,
    Component: loadable(() => import('@/pages/accountPlanning/SMEBusiness')),
  },
  {
    path: siteMap.accountPlanning.boAndFamily,
    Component: loadable(() => import('@/pages/accountPlanning/BOAndFamily')),
  },
  {
    path: siteMap.accountPlanning.employee,
    Component: loadable(() => import('@/pages/accountPlanning/Employee')),
  },
  {
    path: siteMap.accountPlanning.supplyChain,
    Component: loadable(() => import('@/pages/accountPlanning/SupplyChain')),
  },
];
