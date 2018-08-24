import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RaidDetailsViewModel } from '../../../core/models/view-models/raid-details.view.model';
import { RaidsService } from '../../../core/services/raids/raids.service';
import { getDate } from '../../../core/utils/helper-functions';

@Component({
  selector: 'app-raid-details',
  templateUrl: './raid-details.component.html',
  styleUrls: ['./raid-details.component.css']
})
export class RaidDetailsComponent implements OnInit {
  raid$: Observable<RaidDetailsViewModel>;
  private getDate = getDate;

  constructor(
    private ar: ActivatedRoute,
    private raidsService: RaidsService
  ) { }

  ngOnInit() {
    this.raid$ = this.raidsService.getDetails(this.ar.snapshot.params['id']);
  }

}
