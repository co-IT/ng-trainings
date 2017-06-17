export class Book {
  constructor(
    public title: string,
    public description: string,
    public authors: string[],
    public price: number,
    public rating: number
  ) { }
}
