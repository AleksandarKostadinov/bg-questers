import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { RaidInputModel } from '../../models/input-models/raid.input.model';
import { RaidItemViewModel } from '../../models/view-models/raid-item.view.model';

const appDomain = 'https://bg-questers-d161a.firebaseio.com';
const raidsUrl = `${appDomain}/raids.json`;

@Injectable()
export class RaidsService {
  constructor(
    private http: HttpClientService
  ) { }

  getAll() {
    return this.http.get<RaidItemViewModel>(raidsUrl);
  }

  create(body) {
    return this.http.post<RaidInputModel>(raidsUrl, body);
  }
}
