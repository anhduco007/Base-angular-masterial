import { ResponseInterceptor } from './auth/intercoptor/response.interceptor';
import { RequestInterceptor } from './auth/intercoptor/request.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CancelIntereptor } from './auth/intercoptor/cancel.interceptor';
import { CanActivateGuard } from './auth/guards/canActivate.guard';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/login/login.reducer';

@NgModule({
    imports: [
        HttpClientModule,
        FormsModule,
        StoreModule.forFeature('feature_login', loginReducer),
    ],
    declarations: [],
    exports: [
        HttpClientModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: CancelIntereptor, multi: true },
        CanActivateGuard
    ]
})

export class CoreModule {
}
