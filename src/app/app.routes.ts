import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/overview/overview.component').then((m) => m.OverviewComponent),
  },
  {
    path: 'initiatives',
    loadComponent: () =>
      import('./features/initiatives/initiatives.component').then((m) => m.InitiativesComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
