export class Book {
  constructor(
    public title: string,
    public subtitle: string,
    public isbn: string,
    public cover: string,
    public authors: string[],
    public description?: string,
    public price = 0,
    rating = 0
  ) {
    this.rating = rating;
   }
  private _rating;

  static empty() {
    return new Book('', '', '', '', [], '');
  }

  get rating() {
    return this._rating;
  }

  set rating(value: number) {
    if (value > 5) {
      this._rating = 5;
    } else if (value < 0) {
      this._rating = 0;
    } else {
      this._rating = value;
    }
  }
}
