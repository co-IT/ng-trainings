import { Book } from './book';

describe('Book', () => {
  describe('When a book is going to be rated below 0', () => {
    it('the rating remains 0', () => {
      const sut = new Book('', '', []);

      sut.rating--;

      expect(sut.rating).toEqual(0);
    });
  });

  describe('When a book is going to be rated higher than 5', () => {
    it('the rating remains 5', () => {
      const sut = Book.empty();

      sut.rating = 5;
      sut.rating++;

      expect(sut.rating).not.toBeGreaterThan(5);
    });
  });
});
