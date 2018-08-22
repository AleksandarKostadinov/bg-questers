import { Component, Input } from '@angular/core';
import { RaidItemViewModel } from '../../../core/models/view-models/raid-item.view.model';
import { AuthService } from '../../../core/services/authentication/auth.service';
import { RaidsService } from '../../../core/services/raids/raids.service';

@Component({
  selector: 'app-raid-item',
  templateUrl: './raid-item.component.html',
  styleUrls: ['./raid-item.component.css']
})
export class RaidItemComponent {
  @Input('raid') raid: RaidItemViewModel;

  constructor(
    private authService: AuthService
  ) { }
}
