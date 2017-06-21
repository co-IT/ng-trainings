export class Book {
  subtitle: string;
  price: number;
  private _rating = 0;

  thumbnail: string;

  static empty() {
    return new Book('', '', []);
  }

  get rating() { return this._rating; }

  rateUp() {
    this._rating++;
  }

  rateDown() {
    if (this._rating - 1 < 0) { return; }
    this._rating--;
  }

  constructor(
    public isbn: string,
    public title: string,
    public authors: string []
  ) { }
}
