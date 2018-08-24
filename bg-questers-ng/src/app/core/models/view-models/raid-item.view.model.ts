export class RaidItemViewModel {
  constructor(
    public id: string,
    public goal: string,
    public status: string,
    public peopleNeeded: number,
    public peoplePerticipating: number,
    public pointsForParticipation: any,
    public isFinished: boolean,
    public startDateTimestamp: string,
    public createdBy: string,
    public imgUrl: string,
    public itemsNeeded?: string,
  ) { }
}
