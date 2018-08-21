import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  private show = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout();
  }

  toggleDropdown() {
    if (this.show) {
      this.show = '';
    } else {
      this.show = 'show';
    }
  }
}
