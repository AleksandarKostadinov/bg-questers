import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaidsEditComponent } from './raids-edit/raids-edit.component';
import { RaidsAllComponent } from './raids-all/raids-all.component';
import { RaidsCreateComponent } from './raids-create/raids-create.component';
import { RaidDetailsComponent } from './raid-details/raid-details.component';
import { AuthGuard } from '../../core/guards/authentication/auth.guard';
import { RaidDeleteComponent } from './raid-delete/raid-delete.component';
import { AuthorGuard } from '../../core/guards/authentication/author.guard';
import { AdminGuard } from '../../core/guards/admin/admin.guard';
import { ErrorComponent } from '../shared/error/error.component';

const routes: Routes = [
  { path: '', component: RaidsAllComponent, canActivate: [AuthGuard] },
  { path: 'create', component: RaidsCreateComponent, canActivate: [AuthGuard]},
  { path: 'edit/:id', component: RaidsEditComponent, canActivate: [AuthGuard, AuthorGuard]},
  { path: 'delete/:id', component: RaidDeleteComponent, canActivate: [ AdminGuard]},
  { path: 'details/:id', redirectTo: ':id' },
  { path: ':id', component: RaidDetailsComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaidsRoutingModule { }
