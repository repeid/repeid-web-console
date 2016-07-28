import { provideRouter, RouterConfig } from '@angular/router';

import { OrganizationsRoutes }    from './organizations/organizations.routes';

// Route Configuration
export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/organizations',
    pathMatch: 'full'
  },
  ...OrganizationsRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
