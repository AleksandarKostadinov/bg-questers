import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RaidsRoutingModule } from './raids-routing.module';
import { raidsComponents } from '.';

@NgModule({
  imports: [
    CommonModule,
    RaidsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [...raidsComponents],
  exports: [...raidsComponents]
})
export class RaidsModule { }
