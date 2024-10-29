import { siteMap } from '@/core/utils';
import {
  BOAndFamilyPage,
  CallPlanCallMemoPage,
  EmployeePage,
  SMEBusinessPage,
  SupplyChainPage,
} from '@/pages/accountPlanning';
import { RouteObject } from 'react-router-dom';

export const accountPlanningRouter: RouteObject[] = [
  {
    path: siteMap.accountPlanning.callPlanCallMemo,
    Component: CallPlanCallMemoPage,
  },
  {
    path: siteMap.accountPlanning.smeBUsiness,
    Component: SMEBusinessPage,
  },
  {
    path: siteMap.accountPlanning.boAndFamily,
    Component: BOAndFamilyPage,
  },
  {
    path: siteMap.accountPlanning.employee,
    Component: EmployeePage,
  },
  {
    path: siteMap.accountPlanning.supplyChain,
    Component: SupplyChainPage,
  },
];
