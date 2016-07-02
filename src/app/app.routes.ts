import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard';
import { HeroesComponent } from './heroes';
import { HeroDetailComponent } from './hero-detail';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    terminal: true
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
