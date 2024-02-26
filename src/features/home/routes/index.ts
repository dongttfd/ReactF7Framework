import { Router } from 'framework7/types';
import { HomePage } from './HomePage';
import { paths } from '@/config/paths';

export const homeRoutes: Router.RouteParameters[] = [
  {
    path: paths.root,
    component: HomePage,
    name: 'Home',
  },
];
