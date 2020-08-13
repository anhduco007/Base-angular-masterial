import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loginSelector } from '../../../core/store/login/login.selector';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {
  config: PerfectScrollbarConfigInterface = {};
  notifications: Object[] = [];
  mymessages: Object[] = [];
  loginStore$;
  constructor(
    private router: Router,
    private store$: Store
  ) { }

  ngOnInit() {
    this.store$
      .pipe(
        select(loginSelector),
        )
      .subscribe(x => console.log(x));
  }

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
