export class Book {
  cover: string;

  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public authors: string[],
    public price: number,
    public rating: number
  ) { }
}
