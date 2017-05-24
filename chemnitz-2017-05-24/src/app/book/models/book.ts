export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public authors: string[],
    public price: number) { }
}
