import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClientService } from '../http-client.service';
import { RaidInputModel } from '../../models/input-models/raid.input.model';
import { RaidItemViewModel } from '../../models/view-models/raid-item.view.model';
import { RaidDetailsViewModel } from '../../models/view-models/raid-details.view.model';

const appDomain = 'https://bg-questers-d161a.firebaseio.com';
const raidsUrl = `${appDomain}/raids.json`;

@Injectable()
export class RaidsService {
  constructor(
    private http: HttpClientService
  ) { }

  getAll() {
    return this.http.get<RaidItemViewModel[]>(raidsUrl)
      .pipe(map(function (data): RaidItemViewModel[] {
        const raids: RaidItemViewModel[] = [];

        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            const element = data[id];

            raids.push(
              new RaidItemViewModel(
                id,
                element.goal,
                element.status,
                element.peopleNeeded,
                element.peoplePerticipating,
                element.pointsForParticipation,
                element.isFinished,
                element.startDateTimestamp,
                element.createdBy,
                element.itemsNeeded
              )
            );
          }
        }

        return raids;
      }));
  }

  edit(id: string, body) {
    return this.http.put(`${appDomain}/raids/${id}.json`, body);
  }

  create(body) {
    return this.http.post<RaidInputModel>(raidsUrl, body);
  }

  getDetails(id: string) {
    return this.http.get(`${appDomain}/raids/${id}.json`)
      .pipe(map((data: RaidInputModel): RaidDetailsViewModel => {
        console.log(data);

        return new RaidDetailsViewModel(
          id,
          data.goal,
          data.imgUrl,
          data.location,
          data.description,
          data.peopleNeeded,
          data.peopleParticipating,
          data.status,
          data.isFinished,
          data.startDateTimestamp,
          data.endDateTimestamp,
          data.createdAtTimestamp,
          data.createdBy,
          data.details || '',
          data.itemsNeeded || ''
        );
      }));
  }

  deleteItem(id: string) {
    return this.http.delete(`${appDomain}/raids/${id}.json`);
  }
}
