import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  private showQuests = '';
  private showRaids = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout();
  }

  toggleDropdownQuests() {
    this.showQuests = this.toggle(this.showQuests);
  }

  toggleDropdownRaids() {
    this.showRaids = this.toggle(this.showRaids);
  }

  private toggle(show) {
    if (show) {
      return '';
    } else {
      return 'show';
    }
  }
}
