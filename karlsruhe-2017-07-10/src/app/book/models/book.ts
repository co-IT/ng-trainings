export class Book {

  year: string;
  thumbnail: string;
  rating = 0;

  constructor(
    public isbn: string,
    public title: string,
    public authors: string[],
    public price: number
  ) { }

}
