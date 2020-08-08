import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardRouting } from './dashboards.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRouting)
  ],
  declarations: [DashboardComponent]
})
export class DashboardsModule {}
