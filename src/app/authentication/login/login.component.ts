import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../../core/auth/services/local-storage.service';
import { Store, select } from '@ngrx/store';
import { getLoginSuccess } from '../../core/store/login/login.actions';
import { loginSelector } from '../../core/store/login/login.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public loginState$: Subscription;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localStorage: LocalStorageService,
    private router: Router,
    private store$: Store
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.authService.login(this.form.value).subscribe(
      data => {
        this.localStorage.set('token', data.token);
        this.store$.dispatch(getLoginSuccess({ status: 'success', message: data.message, username: this.form.get('username').value }));
        this.router.navigateByUrl('/');
      },
      error => console.log(error)
    );
  }
}
