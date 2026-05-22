import { lazy } from 'react';

export const dashboard = lazy(() => import('../pages/Dashboard'));
export const form = lazy(() => import('../pages/Form'));

export const ROUTE_PATHS={
    DASHBOARD:'/',
    FORM:'/dashboard/form'
}