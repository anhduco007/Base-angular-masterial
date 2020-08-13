import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  registerState: {
    loading?: boolean;
    success?: boolean;
    fail?: boolean;
  } = { loading: true, success: null, fail: null };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.registerState.loading = true;
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]]
    }, { validator: this.checkIfMatchingPasswords('password', 'confirmPassword') });
  }

  private checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notSame: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.authService.register(this.form.value).subscribe(
      (data) => {
        this.registerState.loading = !this.registerState.loading;
        this.registerState.success = true;
      },
      (error) => {
        this.registerState.loading = !this.registerState.loading;
        this.registerState.fail = true;
      }
    );
  }
}
