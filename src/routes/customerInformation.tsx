import { siteMap } from '@/core/utils';
import {
  BOFamilyPage,
  CustomerInformationPage,
  CustomerOverviewPage,
  EmployeePage,
  TreeViewPage,
} from '@/pages/customerInformation';
import { RouteObject } from 'react-router-dom';

export const customerInformationRouter: RouteObject[] = [
  {
    path: siteMap.customerInformation.boAndFamily,
    Component: BOFamilyPage,
  },
  {
    path: siteMap.customerInformation.customerInformation,
    Component: CustomerInformationPage,
  },
  {
    path: siteMap.customerInformation.customerOverview,
    Component: CustomerOverviewPage,
  },
  {
    path: siteMap.customerInformation.employee,
    Component: EmployeePage,
  },
  {
    path: siteMap.customerInformation.treeView,
    Component: TreeViewPage,
  },
];
