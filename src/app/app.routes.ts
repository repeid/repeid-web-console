import { provideRouter, RouterConfig } from '@angular/router';
import { OrganizationsRoutes } from './organizations/organizations.routes';
import { AboutComponent } from './components/about';
import { ErrorComponent } from './components/error';

// Route Configuration
export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/organizations',
    pathMatch: 'full'
  },
  { path: 'about', component: AboutComponent },
  { path: 'error', component: ErrorComponent },
  ...OrganizationsRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
