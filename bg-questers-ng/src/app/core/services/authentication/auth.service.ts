import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { LoginInputModel } from '../../models/input-models/login.input.model';
import { SignUpInputModel } from '../../models/input-models/signup.input.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  private token: string = null;
  public redirectUrl: string;

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  login(loginModel: LoginInputModel): void {
    firebase
      .auth()
      .signInWithEmailAndPassword(loginModel.email, loginModel.password)
      .then(this.handleSuccess('You have logged in!').bind(this))
      .catch(this.handleError.bind(this));
  }

  register(signInModel: SignUpInputModel): void {
    firebase
      .auth()
      .createUserWithEmailAndPassword(signInModel.email, signInModel.password)
      .then(this.handleSuccess('You have registered!').bind(this))
      .catch(this.handleError.bind(this));
  }

  logout(): void {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = null;
        this.toastr.info('You have logged out successfully');
        this.tryNavigate();
      })
      .catch(this.handleError.bind(this));
  }

  isLoggedIn(): boolean {
    return this.token !== null;
  }

  tryNavigate() {
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    } else {
      this.router.navigate(['']);
    }
  }

  private getToken() {
    firebase.auth()
      .currentUser
      .getIdToken()
      .then(token => {
        console.log(token);
        this.token = token;
      })
      .catch();

    return this.token;
  }

  private handleError(err) {
    this.toastr.error(err.message, 'Oops!');
  }

  private handleSuccess(message: string) {
    return () => {
      this.token = this.getToken();
      this.toastr.success(message, 'Success!');
      this.tryNavigate();
    };
  }
}
