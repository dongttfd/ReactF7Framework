import { Router } from 'framework7/types';
import { LoginPage } from './LoginPage';
import { paths } from '@/config/paths';

export const loginRoutes: Router.RouteParameters[] = [
  {
    path: paths.login,
    component: LoginPage,
    name: 'Login',
  },
];
