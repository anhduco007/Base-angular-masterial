import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';

import { IUserLogin, IUserRegister } from './user.model';

@Injectable()
export class AuthService {

  constructor() { }

  login(body: IUserLogin): Observable<any> {
    const rate = Math.random();
    const resSuccess = { username: body.username, token: 'acs12khjL45ss9', message: 'login success' };
    const resFail = { message: 'login fail' };
    return rate > 0.2 ? of(resSuccess) : throwError(resFail);
  }

  register(body: IUserRegister) {
    const rate = Math.random();
    const resSuccess = { username: body.username, message: 'register success' };
    const resFail = { message: 'register fail' };
    return rate > 0.2 ? of(resSuccess) : throwError(resFail);
  }
}
