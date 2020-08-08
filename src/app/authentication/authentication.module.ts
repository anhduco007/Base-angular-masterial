import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from './../shared/shared.module';
import { AuthenticationRoutes } from './authentication.routing';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(AuthenticationRoutes),
  ],
  declarations: [
    ForgotComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent
  ]
})
export class AuthenticationModule {}
