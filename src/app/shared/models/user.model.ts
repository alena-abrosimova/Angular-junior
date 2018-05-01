export class User {
  constructor (
    public email: string,
    public pass: string,
    public username: string,
    public id?: number
  ) {}
}
