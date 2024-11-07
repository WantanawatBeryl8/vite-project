export const baseMenuItems = {
  search: {
    key: 'search',
    label: 'Search',
    value: '/search',
    child: [],
  },
  accountPlanning: {
    key: 'accountPlanning',
    label: 'Account Planning',
    value: '',
    child: [
      {
        key: 'callPlanCallMemo',
        label: 'CallPlan / CallMemo',
        value: '/account-planning/call',
      },
      {
        key: 'smeBusiness',
        label: 'SME Business',
        value: '/account-planning/sme',
      },
      {
        key: 'boAndFamily',
        label: 'BO and Family',
        value: '/account-planning/bo-family',
      },
      {
        key: 'employee',
        label: 'Employee',
        value: '/account-planning/employee',
      },
      {
        key: 'supplyChain',
        label: 'Supply Chain',
        value: '/account-planning/supply-chain',
      },
    ],
  },
  customerInformation: {
    key: 'customerInformation',
    label: 'Customer Information',
    value: '',
    child: [
      {
        key: 'customerOverview',
        label: 'Customer Overview',
        value: '/customer-information/overview',
      },
      {
        key: 'customerInformation',
        label: 'Customer Information',
        value: '/customer-information/information',
      },
      {
        key: 'treeView',
        label: 'Tree View',
        value: '/customer-information/tree-view',
      },
      {
        key: 'boAndFamily',
        label: 'BO and Family',
        value: '/customer-information/bo-family',
      },
      {
        key: 'employee',
        label: 'Employee',
        value: '/customer-information/employee',
      },
    ],
  },
  report: {
    key: 'report',
    label: 'Report',
    value: '',
    child: [
      {
        key: 'reportIndex',
        label: 'Report Index',
        value: '/report/',
      },
    ],
  },
  adminMenu: {
    key: 'adminMenu',
    label: 'Admin Menu',
    value: '',
    child: [
      {
        key: 'reportConfiguration',
        label: 'Report Configuration',
        value: '/admin-menu/report',
      },
    ],
  },
};
