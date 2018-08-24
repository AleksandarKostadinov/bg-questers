import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { AuthService } from '../../services/authentication/auth.service';
import { RaidsService } from '../../services/raids/raids.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private riadsService: RaidsService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const that = this;

    return new Promise(function(resolve, reject) {
      that.riadsService.getDetails(next.params['id']).subscribe((data) => {
        const isAuthor = data.createdBy === that.authService.email;

        if (!isAuthor) {
          that.toastr.error('You have to be the author of the raid to edit it or delete it!', 'Sorry.');
        }

        resolve(isAuthor);
      }, reject);
    });
  }
}
