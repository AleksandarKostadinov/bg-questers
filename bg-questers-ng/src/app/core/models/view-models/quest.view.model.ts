export class QuestItemViewModel {
  constructor(
    public id: string,
    public location: any,
    public description: string,
    public suggestedBy: string,
    public status: string,
    public geoLocation: any,
    public imgUrl: string,
    public points: {credits: number, knowledge: number},
    public medalsIds: Array<string>,
    public index?: number,
    public additionalInfo?: any
  ) { }
}
