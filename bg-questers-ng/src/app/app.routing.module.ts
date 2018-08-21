import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './components/authentication/register-form/register.form.component';
import { LoginFormComponent } from './components/authentication/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { AllQuestsComponent } from './components/quests/all-quests/all-quests.component';
import { AuthGuard } from './core/guards/authentication/auth.guard';
import { QuestsModule } from './components/quests/quests.module';
import { RaidsModule } from './components/raids/raids.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'auth', children: [
      {path: 'register', component: RegisterFormComponent},
      {path: 'login', component: LoginFormComponent},
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'quests', loadChildren: () => QuestsModule, canActivate: [AuthGuard] },
  { path: 'raids', loadChildren: () => RaidsModule }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutngModule { }
