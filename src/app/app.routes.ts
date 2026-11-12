import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'spartan-poc',
    loadComponent: () =>
      import('./features/spartan-poc/spartan-poc.component').then((m) => m.SpartanPocComponent),
  },
  {
    path: '',
    redirectTo: 'spartan-poc',
    pathMatch: 'full',
  },
  // ========== INTENTIONALLY COMMENTED OUT (user request) ==========
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./features/overview/overview.component').then((m) => m.OverviewComponent),
  // },
  // {
  //   path: 'initiatives',
  //   loadComponent: () =>
  //     import('./features/initiatives/initiatives.component').then((m) => m.InitiativesComponent),
  // },
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];
