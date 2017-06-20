export class Book {
  subtitle: string;
  price: number;
  rating = 0;

  thumbnail: string;

  static empty() {
    return new Book('', '', []);
  }

  constructor(
    public isbn: string,
    public title: string,
    public authors: string []
  ) { }
}
