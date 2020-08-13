import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(
        private localStorage: LocalStorageService,
        private router: Router
        ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const token = this.localStorage.getToken;
        if (token) {
            return true;
        }
        this.router.navigateByUrl('/auth/login');
        return false;
    }
}
