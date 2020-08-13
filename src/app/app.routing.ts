import { Routes } from '@angular/router';
import { CanActivateGuard } from './core/auth/guards/canActivate.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: './layouts/full/full.module#FullLayoutModule',
    canActivate: [CanActivateGuard]
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
