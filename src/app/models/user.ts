export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public topic: string,
    public enquiry: string,
    public subscribe: boolean,
    public callback: boolean
  ) {
  }
}
