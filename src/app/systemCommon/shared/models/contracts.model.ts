export class Contract {
  constructor(
    public job: number,
    public contractor: number,
    public hours: number,
    public lastDate: string,
    public amount: number,
    public id?: number,
    public jobName?: string
  ) {}
}



//   "id": 4,
//   "job": 6,
//   "contractor": 2,
//   "hours": 20,
//   "lastdate": "17.06.2017 14:00:58",
//   "amount": 3000
