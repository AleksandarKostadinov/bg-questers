export class RaidInputModel {
  constructor(
    public goal: string,
    public imgUrl: string,
    public location: string,
    public description: string,
    public peopleNeeded: number,
    public peopleParticipating: number,
    public status: string,
    public isFinished: boolean,
    public startDateTimestamp: number,
    public endDateTimestamp: string,
    public createdAtTimestamp: string,
    public createdBy: string,
    public details?: string,
    public itemsNeeded?: string,
  ) { }
}
