import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';
import { Routes } from '@angular/router';

import { FullComponent } from './full.component';

export const FullLayoutRouting: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

