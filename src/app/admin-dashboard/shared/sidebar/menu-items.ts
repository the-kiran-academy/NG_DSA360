import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/admin-dashboard/component/admin-dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: [],
  },

  {
    path: '/admin-dashboard/component/all-role',
    title: 'Roles',
    icon: 'bi bi-wallet2',
    class: '',
    extralink: false,
    submenu: [

    ],
  },

  {
    path: '/admin-dashboard/component/all-region',
    title: 'Regions',
    icon: 'bi bi-geo-alt',
    class: '',
    extralink: false,
    submenu: [

    ],
  },

  {
    path: '/admin-dashboard/component/manage-interest-rates',
    title: 'Manage Interest Rates',
    icon: 'bi bi-currency-rupee',
    class: '',
    extralink: false,
    submenu: [

    ],
  },

  {
    path: '/admin-dashboard/component/commision-structure',
    title: 'Commission Structures',
    icon: 'bi bi-bar-chart',
    class: '',
    extralink: false,
    submenu: [

    ],
  },
];
