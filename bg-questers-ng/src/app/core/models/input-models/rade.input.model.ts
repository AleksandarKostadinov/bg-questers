export class RadeInputModel {
  constructor(
    public goal: string,
    public description: string,
    public peopleNeeded: number,
    public peoplePerticipating: number,
    public pointsForParticipation: any,
    public status: string,
    public isFinished: boolean,
    public startDateTimestamp: string,
    public createdAtTimestamp: string,
    public createdBy: string,
    public details?: string,
    public itemsNeeded?: string,
  ) { }
}
