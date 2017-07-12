export class Book {

  year: string;
  thumbnail: string;
  rating = 0;

  static empty() {
    return new Book('', '', [], 0);
  }

  constructor(
    public isbn: string,
    public title: string,
    public authors: string[],
    public price: number
  ) { }

}
