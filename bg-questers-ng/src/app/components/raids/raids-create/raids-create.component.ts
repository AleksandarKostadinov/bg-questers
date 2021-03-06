import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RaidStatus } from '../../../core/enums/raid-status.emun';
import { AuthService } from '../../../core/services/authentication/auth.service';
import { RaidsService } from '../../../core/services/raids/raids.service';
import { RaidInputModel } from '../../../core/models/input-models/raid.input.model';
import { getHoursInMiliseconds } from '../../../core/utils/helper-functions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  templateUrl: './raids-create.component.html'
})
export class RaidsCreateComponent implements OnInit {
  private now: Date;
  private createRaidForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private raidService: RaidsService,
    private router: Router,
    private toastr: ToastrService,
    private location: Location
  ) {
    this.now = new Date();
  }

  ngOnInit() {
    console.log(this.authService.email);


    this.createRaidForm = this.fb.group({
      goal: ['Clean up the park', Validators.required],
      location: ['Sofia, Bulgaria', Validators.required],
      imgUrl: ['https://cdn.pixabay.com/photo/2018/08/01/21/43/buggy-3578283_960_720.jpg', Validators.required],
      description: ['Description 1', Validators.required],
      peopleNeeded: [40, [Validators.required, Validators.min(1)]],
      peopleParticipating: [5, [Validators.required, Validators.min(0)]],
      status: [RaidStatus.NotStarted],
      isFinished: [false],
      startDate: [(new Date(this.now.getTime() + getHoursInMiliseconds(24))).toISOString().slice(0, 10), Validators.required],
      createdAtTimestamp: [Date.now(), Validators.required],
      createdBy: [this.authService.email, Validators.required],
      details: [''],
      itemsNeeded: ['']
    });
  }

  create() {
    const { startDate, ...rest } = this.createRaidForm.value;
    rest.startDateTimestamp = (new Date(startDate)).getTime();

    this.raidService
      .create(rest)
      .subscribe((data) => {
        console.log(data);
        this.toastr.success('You have initialzed a raid.', 'Success!');
        this.router.navigate(['/raids']);
      });
  }

  get imgUrl(): string {
    return this.createRaidForm.get('imgUrl').value;
  }

  get startDate() {
    return this.createRaidForm.get('startDateTimestamp').value;
  }

  cancel() {
    this.location.back();
  }
}
