import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { AuthService } from '../authentication/auth.service';
import { QuestInputModel } from '../../models/input-models/quest.input.model';

const appDomain = 'https://bg-questers-d161a.firebaseio.com/quests';
const suggestedUrl =  appDomain + '/suggested';


@Injectable()
export class QuestsService {
  constructor(
    private http: HttpClientService
  ) { }

  getAll() {

  }

  suggest(body: QuestInputModel) {
    this.http.post<QuestInputModel>(suggestedUrl, body);
  }
}
