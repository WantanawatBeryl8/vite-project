export const siteMap = {
  login: '/login',
  portal: '/portal',
  search: '/search',
  accountPlanning: {
    callPlanCallMemo: '/account-planning/call',
    smeBusiness: '/account-planning/sme',
    boAndFamily: '/account-planning/bo-family',
    employee: '/account-planning/employee',
    supplyChain: '/account-planning/supply-chain',
  },
  customerInformation: {
    customerOverview: '/customer-information/overview',
    customerInformation: '/customer-information/information',
    treeView: '/customer-information/tree-view',
    boAndFamily: '/customer-information/bo-family',
    employee: '/customer-information/employee',
  },
  report: {
    index: '/report/',
  },
  adminMenu: {
    reportConfiguration: '/admin-menu/report',
  },
};

export const baseMenuItems = {
  search: {
    key: 'search',
    label: 'Search',
    value: siteMap.search,
    children: [],
  },
  accountPlanning: {
    key: 'accountPlanning',
    label: 'Account Planning',
    value: '',
    children: [
      {
        key: 'callPlanCallMemo',
        label: 'CallPlan / CallMemo',
        value: siteMap.accountPlanning.callPlanCallMemo,
      },
      {
        key: 'smeBusiness',
        label: 'SME Business',
        value: siteMap.accountPlanning.smeBusiness,
      },
      {
        key: 'boAndFamily',
        label: 'BO and Family',
        value: siteMap.accountPlanning.boAndFamily,
      },
      {
        key: 'employee',
        label: 'Employee',
        value: siteMap.accountPlanning.employee,
      },
      {
        key: 'supplyChain',
        label: 'Supply Chain',
        value: siteMap.accountPlanning.supplyChain,
      },
    ],
  },
  customerInformation: {
    key: 'customerInformation',
    label: 'Customer Information',
    value: '',
    children: [
      {
        key: 'customerOverview',
        label: 'Customer Overview',
        value: siteMap.customerInformation.customerOverview,
      },
      {
        key: 'customerInformation',
        label: 'Customer Information',
        value: siteMap.customerInformation.customerInformation,
      },
      {
        key: 'treeView',
        label: 'Tree View',
        value: siteMap.customerInformation.treeView,
      },
      {
        key: 'boAndFamily',
        label: 'BO and Family',
        value: siteMap.customerInformation.boAndFamily,
      },
      {
        key: 'employee',
        label: 'Employee',
        value: siteMap.customerInformation.employee,
      },
    ],
  },
  report: {
    key: 'report',
    label: 'Report',
    value: '',
    children: [
      {
        key: 'reportIndex',
        label: 'Report Index',
        value: siteMap.report.index,
      },
    ],
  },
  adminMenu: {
    key: 'adminMenu',
    label: 'Admin Menu',
    value: '',
    children: [
      {
        key: 'reportConfiguration',
        label: 'Report Configuration',
        value: siteMap.adminMenu.reportConfiguration,
      },
    ],
  },
};
