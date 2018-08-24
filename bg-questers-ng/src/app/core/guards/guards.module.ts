import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './authentication/auth.guard';
import { AuthorGuard } from './authentication/author.guard';
import { AdminGuard } from './admin/admin.guard';

@NgModule({
  providers: [ AuthGuard , AuthorGuard, AdminGuard ],
  imports: [
    CommonModule
  ]
})
export class GuardsModule {  }
