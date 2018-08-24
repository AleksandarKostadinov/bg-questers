import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/authentication/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const isAdmin = this.authService.userIsAdmin();

    if (!isAdmin) {
      this.toastr.error('You have to an admin to view this page.', 'Sorry');
    }

    return isAdmin;
  }
}
