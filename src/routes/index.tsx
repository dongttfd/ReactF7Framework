import { Router } from 'framework7/types';
import { aboutRoutes } from '@/features/about';
import { loginRoutes } from '@/features/auth';
import { homeRoutes } from '@/features/home';
import { userRoutes } from '@/features/user';

export const routes: Router.RouteParameters[] = [
  ...loginRoutes,
  ...aboutRoutes,
  ...homeRoutes,
  ...userRoutes,
];
