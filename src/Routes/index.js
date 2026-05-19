import { dashboard, form } from './routes';

export const APP_ROUTES = [
  {
    path: '/',
    element: dashboard,
  },
  {
    path: '/dashboard/form',
    element: form,
  },
];
