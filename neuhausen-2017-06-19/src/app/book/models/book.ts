export class Book {
  subtitle: string;
  price: number;
  rating: number;

  thumbnail: string;

  constructor(
    public isbn: string,
    public title: string,
    public authors: string []
  ) { }
}
