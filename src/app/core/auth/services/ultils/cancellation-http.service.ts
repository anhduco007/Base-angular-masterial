import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CancellationHttpService {
    cancellationHttp$: Subject<boolean> = new Subject<boolean>();
    constructor() {}

    cancel() {
        this.cancellationHttp$.next(true);
    }

    onCancel() {
        return this.cancellationHttp$;
    }
}
