export class Book {
  subtitle: string;
  price: number;
  _rating = 0;

  thumbnail: string;

  get rating() {
    return this._rating;
  }

  set rating(value: number) {
    if (value < 0) {
      this._rating = 0;
    } else if (value > 5) {
      this._rating = 5;
    } else {
      this._rating = value;
    }
  }

  static empty() {
    return new Book('', '', []);
  }

  constructor(
    public isbn: string,
    public title: string,
    public authors: string []
  ) { }
}
