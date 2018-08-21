import {
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
  HttpHandler
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {
      const token = this.authService.getToken();
      if (token) {
        req = req.clone({
          url: `${req.url}?auth=${token}`
        });
      }


      return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
        // save token here
      }));
  }
}
