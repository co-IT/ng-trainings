import {Book} from '../models/book';
import {BookGridElementComponent} from '../book-grid-element/book-grid-element.component';

describe('BookGridElementComponent', () => {
  describe('Unit Test', () => {
    describe('When a book is rated down', () => {
      it('will have the rating -1', () => {
        const bookGridElementComponent = new BookGridElementComponent();

        bookGridElementComponent.bookInput = Book.empty();

        bookGridElementComponent.rateDown();

        expect(bookGridElementComponent.bookInput.rating).toEqual(-1);
      })
    })
  })
})
