import { Environment } from '@/const/app';

export const isProduction = () =>
  import.meta.env.VITE_NODE_ENV === Environment.PRODUCTION;

export const isDebugging = () =>
  [Environment.DEVELOPMENT, Environment.LOCAL].includes(
    import.meta.env.VITE_NODE_ENV as Environment
  );
