import { CancellationHttpService } from './../services/ultils/cancellation-http.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()

export class CancelIntereptor implements HttpInterceptor {
    constructor(private cancellationService: CancellationHttpService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            takeUntil(this.cancellationService.cancellationHttp$)
        );
    }

}
