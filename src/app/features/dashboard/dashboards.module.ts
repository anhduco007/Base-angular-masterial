import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { DashboardRouting } from './dashboards.routing';
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(DashboardRouting)
  ],
  declarations: [DashboardComponent]
})
export class DashboardsModule {}
