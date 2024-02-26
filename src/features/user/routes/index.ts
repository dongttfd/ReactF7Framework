import { Router } from 'framework7/types';
import { User } from './User';
import { paths } from '@/config/paths';

export const userRoutes: Router.RouteParameters[] = [
  {
    path: paths.user,
    component: User,
    name: 'User',
  },
];