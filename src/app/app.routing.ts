import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: './layouts/full/full.module#FullLayoutModule'
  },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: '**',
    redirectTo: 'auth/404'
  }
];
