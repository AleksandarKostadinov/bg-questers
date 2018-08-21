import { NgModule } from '@angular/core';
import { QuestsRoutingModule } from './quests.routing.module';
import { questComponents } from '.';

@NgModule({
  imports: [
    QuestsRoutingModule
  ],
  declarations: [...questComponents],
  exports: [...questComponents]
})
export class QuestsModule { }
