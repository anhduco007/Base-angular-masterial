import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { CoreModule } from './../../core/core.module';
import { AppHeaderComponent } from './header/header.component';
import { SharedModule } from './../../shared/shared.module';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';
import { FullLayoutRouting } from './full.routing';
import { FullComponent } from './full.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from '../../shared/accordion';

@NgModule({
    imports: [
        CoreModule,
        SharedModule,
        PerfectScrollbarModule,
        RouterModule.forChild(FullLayoutRouting),
    ],
    declarations: [
        FullComponent,
        DashboardComponent,
        AppSidebarComponent,
        AppHeaderComponent,
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective
    ],
    exports: []
})

export class FullLayoutModule {}


