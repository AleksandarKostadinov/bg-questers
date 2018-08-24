import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RaidsService } from '../../../core/services/raids/raids.service';
import { RaidDetailsViewModel } from '../../../core/models/view-models/raid-details.view.model';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { getDate as getDateFn } from '../../../core/utils/helper-functions';

@Component({
  selector: 'app-raids-edit',
  templateUrl: './raids-edit.component.html',
  styleUrls: ['./raids-edit.component.css']
})
export class RaidsEditComponent implements OnInit {
  private editRaidForm: FormGroup;
  private id: string;
  private getDate = getDateFn;

  constructor(
    private raidService: RaidsService,
    private ar: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    this.ar.params.subscribe(data => {
      this.raidService.getDetails(data['id'])
        .subscribe(raid => {
          this.id = raid.id;
          console.log(this.id);
          this._setEditForm(raid);
        }
      );
    });
  }

  edit() {
    const { startDate, ...rest } = this.editRaidForm.value;
    rest.startDateTimestamp = (new Date(startDate)).getTime();

    this.raidService
      .edit(this.id, rest)
      .subscribe((data) => {
        this.toastr.success(`Raid "${data['goal']}" successfully edited!`, 'Success!');
        this.router.navigate(['/raids']);
      });
  }

  cancel() {
    this.location.back();
  }

  private _setEditForm(raid: RaidDetailsViewModel) {
    this.editRaidForm = this.fb.group({
      goal: [raid.goal, Validators.required],
      location: [raid.location, Validators.required],
      imgUrl: [raid.imgUrl, Validators.required],
      description: [raid.description, Validators.required],
      peopleNeeded: [raid.peopleNeeded, [Validators.required, Validators.min(1)]],
      peopleParticipating: [raid.peopleParticipating, [Validators.required, Validators.min(0)]],
      status: [raid.status],
      isFinished: [raid.isFinished],
      startDate: [this.getDate(raid.startDateTimestamp), Validators.required],
      createdAtTimestamp: [raid.createdAtTimestamp, Validators.required],
      createdBy: [raid.createdBy, Validators.required],
      details: [raid.details || ''],
      itemsNeeded: [raid.itemsNeeded || '']
    });
  }
}
