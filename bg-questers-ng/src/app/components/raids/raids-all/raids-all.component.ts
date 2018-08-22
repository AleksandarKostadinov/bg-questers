import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RaidsService } from '../../../core/services/raids/raids.service';
import { RaidItemViewModel } from '../../../core/models/view-models/raid-item.view.model';

@Component({
  selector: 'app-raids-all',
  templateUrl: './raids-all.component.html',
  styleUrls: ['./raids-all.component.css']
})
export class RaidsAllComponent implements OnInit {
  private raids$: Observable<RaidItemViewModel[]>;

  constructor(
    private raidService: RaidsService
  ) { }

  ngOnInit() {
    this.raids$ = this.raidService.getAll();
  }

}
