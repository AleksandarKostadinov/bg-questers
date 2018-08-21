import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaidsEditComponent } from './raids-edit/raids-edit.component';
import { RaidsAllComponent } from './raids-all/raids-all.component';
import { RaidsCreateComponent } from './raids-create/raids-create.component';
import { RaidDetailsComponent } from './raid-details/raid-details.component';
import { AuthGuard } from '../../core/guards/authentication/auth.guard';

const routes: Routes = [
  { path: '', component: RaidsAllComponent},
  { path: 'edit', component: RaidsEditComponent, canActivate: [AuthGuard]},
  { path: 'create', component: RaidsCreateComponent, canActivate: [AuthGuard]},
  { path: ':id', component: RaidDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaidsRoutingModule { }
