import { Book } from './book';

describe('Book', () => {
  describe('When a book is going to be rated below zero', () => {
    it('the rating remains 0', () => {
      const book = Book.empty();

      book.rateDown();

      expect(book.rating).toEqual(0);
    });
  });
});
