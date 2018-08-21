import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/authentication/auth.service';

@Component({
  templateUrl: './register.form.component.html'
})
export class RegisterFormComponent {
  public signupForm = this.fb.group({
    email: ['', [ Validators.email, Validators.required ]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  signup() {
    this.authService.register({
       email: this.signupForm.get('email').value,
       password: this.signupForm.get('password').value
      });
  }
}
