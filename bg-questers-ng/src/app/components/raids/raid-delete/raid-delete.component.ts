import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RaidDetailsViewModel } from '../../../core/models/view-models/raid-details.view.model';
import { RaidsService } from '../../../core/services/raids/raids.service';
import { ToastrService } from 'ngx-toastr';
import { getDate as getDateFn } from '../../../core/utils/helper-functions';

@Component({
  selector: 'app-raid-delete',
  templateUrl: './raid-delete.component.html',
  styleUrls: ['./raid-delete.component.css']
})
export class RaidDeleteComponent implements OnInit {
  private raid$: Observable<RaidDetailsViewModel>;
  private id: string;
  private getDate = getDateFn;


  constructor(
    private raidService: RaidsService,
    private ar: ActivatedRoute,
    private location: Location,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.ar.snapshot.params['id'];
    this.raid$ = this.raidService.getDetails(this.id);
  }

  cancel() {
    this.location.back();
  }

  daleteItem() {
    this.raidService.deleteItem(this.id).subscribe(data => {
      if (data === null) {
        this.toastr.info('Deleted item', 'Success');
        this.router.navigate(['/raids']);
      }
    });
  }
}
