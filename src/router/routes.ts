import { Home } from '@components/pages';
import { RootPage } from '@components/templates';
import { ComponentType } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

/**
 * Interface for navigation route configuration.
 */
export interface RouteNavConfig {
  /** The unique identifier for the route */
  id: string;
  /** The path of the route */
  path: string;
  /** The React component to render for the route */
  component: ComponentType;
  /** The name of the route, used for display purposes */
  name: string;
  /** The icon associated with the route */
  Icon?: ComponentType;
  /** An optional description for the route */
  description?: string;
}

/**
 * Enumeration of route IDs for navigation.
 */
export enum ROUTES_NAV_IDS {
  /** Home route ID */
  HOME = '/',
}

/**
 * Array of route navigation configurations.
 */
export const navRoutes: RouteNavConfig[] = [
  {
    id: ROUTES_NAV_IDS.HOME,
    path: ROUTES_NAV_IDS.HOME,
    component: Home,
    name: 'Início',
  },
];

/**
 * Array of child routes generated from the route navigation configurations.
 */
export const childrenRoutes: RouteObject[] = navRoutes.map(
  (route: RouteNavConfig): RouteObject => ({
    path: route.path,
    id: route.id,
    Component: route.component,
  })
);

/**
 * Array of base routes for the application.
 */
export const baseRoutes: RouteObject[] = [
  {
    path: ROUTES_NAV_IDS.HOME,
    Component: RootPage,
    children: childrenRoutes,
  },
];

/**
 * Creates a browser router using the defined routes.
 */
const router = createBrowserRouter(baseRoutes);

export default router;
