import { Router } from 'framework7/types';
import { AboutPage } from './AboutPage';
import { paths } from '@/config/paths';

export const aboutRoutes: Router.RouteParameters[] = [
  {
    path: paths.about,
    component: AboutPage,
    name: 'About',
  },
];
