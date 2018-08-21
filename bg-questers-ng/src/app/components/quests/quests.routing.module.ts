import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuestsComponent } from './all-quests/all-quests.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestDetailsComponent } from './quest-details/quest-details.component';
import { QuestSuggestComponent } from './quest-suggest/quest-suggest.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AllQuestsComponent },
  { path: 'details/:id' , component: QuestDetailsComponent },
  { path: 'suggest' , component: QuestSuggestComponent },
  { path: '**' , component: AllQuestsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [ RouterModule ]
})
export class QuestsRoutingModule { }
