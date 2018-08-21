import { NgModule } from '@angular/core';
import { QuestsRoutingModule } from './quests.routing.module';
import { questCompoents } from '.';

@NgModule({
  imports: [
    QuestsRoutingModule
  ],
  declarations: [...questCompoents],
  exports: [...questCompoents]
})
export class QuestsModule { }
