export class Book {
  thumbnail: string;
  rating = 0;
  description: string;

  constructor(
    public isbn: string,
    public title: string,
    public price: number,
    public authors: string[]
  ) { }

  rateUp() {
    this.rating++;
  }

  rateDown() {
    this.rating--;
  }
}
