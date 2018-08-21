import { Component} from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/authentication/auth.service';

@Component({
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  private loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [ Validators.email, Validators.required ]],
      password: ['', Validators.required],
      confirmPassword: ['']
    });

    this.loginForm
      .get('confirmPassword')
      .setValidators([Validators.required, Validators.minLength(6), this.validateMatch('password').bind(this)]);

    this.loginForm
      .get('password')
      .setValidators([Validators.required, Validators.minLength(6), this.validateMatch('confirmPassword').bind(this)]);
  }

  login() {
    this.authService.login({
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    });
  }

  private validateMatch (otherControlStr: string) {
    return (control: AbstractControl): {[key: string]: any} | null  => {
      const root = control.root;
      const otherControl = root.get(otherControlStr);

      if (otherControl.value === control.value) {
        this.setFieldAsValid(otherControl);
        this.setFieldAsValid(control);
        return null;
      } else {
        this.setFieldAsInvalid(otherControl);
        this.setFieldAsInvalid(control);
        return { nomatch: true };
      }
    };
  }

  private setFieldAsInvalid(field: AbstractControl) {
    field.setErrors({
      'invalid': true
    });
  }

  private setFieldAsValid(field: AbstractControl) {
    field.setErrors(null);
  }

  get password () {
    return this.loginForm.get('password');
  }

  get confirmPassword () {
    return this.loginForm.get('confirmPassword');
  }
}
