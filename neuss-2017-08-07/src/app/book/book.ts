export class Book {
  constructor(
    public title: string,
    public subtitle: string,
    public isbn: string,
    public cover: string,
    public authors: string[],
    public descripion?: string,
    public price = 0,
    public rating = 0
  ) { }
}
