export class Book {
  price: number;
  rating = 0;
  thumbnail: string;

  constructor(
    public isbn: string,
    public title: string,
    public authors: string[]
  ) {}
}
