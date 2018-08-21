import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { authComponents } from '.';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ...authComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [...authComponents]
})
export class AuthModule {  }
