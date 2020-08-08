import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardRouting } from './dashboards.routing';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRouting)
  ],
  declarations: []
})
export class DashboardsModule {}
