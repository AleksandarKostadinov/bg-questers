import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaidsRoutingModule } from './raids-routing.module';
import { RaidsCreateComponent } from './raids-create/raids-create.component';

@NgModule({
  imports: [
    CommonModule,
    RaidsRoutingModule
  ],
  declarations: [RaidsCreateComponent]
})
export class RaidsModule { }
