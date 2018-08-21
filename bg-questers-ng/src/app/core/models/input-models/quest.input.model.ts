export class QuestInputModel {
  constructor(
    public landmark: string,
    public location: any,
    public description: string,
    public imgUrl: string,
    public points: {credits: number, knowledge: number},
    public medalsIds: Array<string>,
    public index?: number,
    public additionalInfo?: any
  ) { }
}
