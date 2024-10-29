import { siteMap } from '@/core/utils';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const accountPlanningRouter: RouteObject[] = [
  {
    path: siteMap.accountPlanning.callPlanCallMemo,
    Component: lazy(() => import('@/pages/accountPlanning/CallPlanCallMemo')),
  },
  {
    path: siteMap.accountPlanning.smeBUsiness,
    Component: lazy(() => import('@/pages/accountPlanning/SMEBusiness')),
  },
  {
    path: siteMap.accountPlanning.boAndFamily,
    Component: lazy(() => import('@/pages/accountPlanning/BOAndFamily')),
  },
  {
    path: siteMap.accountPlanning.employee,
    Component: lazy(() => import('@/pages/accountPlanning/Employee')),
  },
  {
    path: siteMap.accountPlanning.supplyChain,
    Component: lazy(() => import('@/pages/accountPlanning/SupplyChain')),
  },
];
