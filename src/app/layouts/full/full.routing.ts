import { Routes } from '@angular/router';
import { FullComponent } from './full.component';
export const FullLayoutRouting: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: './../../features/dashboard/dashboards.module#DashboardsModule'
      }
    ]
  }
];

