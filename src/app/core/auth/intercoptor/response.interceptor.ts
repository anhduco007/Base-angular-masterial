import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    return event;
                }
                return;
            }),
            catchError((_error: HttpErrorResponse) => {
                if (_error.status === 401) {
                    this.router.navigateByUrl('/auth/login');
                    /**
                     * TODO
                     * Show snack bar
                     * Create logout service
                     */
                } else {
                    return throwError(_error);
                }
            })
        );
    }
}
