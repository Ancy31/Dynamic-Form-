import { dashboard, form, ROUTE_PATHS } from './routes';

export const APP_ROUTES = [
  {
    path:ROUTE_PATHS?.DASHBOARD,
    element: dashboard,
  },
  {
    path: ROUTE_PATHS?.FORM,
    element: form,
  },
];
