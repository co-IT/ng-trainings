import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable()
export class BooksService {
  private books: Book[] = [{
    isbn: '98237593473',
    title: 'Angular',
    description: 'Some description',
    authors: ['Mîsko Hévéry'],
    price: 34.50,
    rating: 4
  }, {
    isbn: '98237593476',
    title: 'Aurelia',
    description: 'Some description',
    authors: ['Rob'],
    price: 14.50,
    rating: 4
  }, {
    isbn: '98237593474',
    title: 'Vue.JS',
    description: 'Some description',
    authors: ['André'],
    price: 24.50,
    rating: 4
  }];

  all(): Book[] {
    return this.books.map(b => new Book(b.isbn,
                                        b.title,
                                        b.description,
                                        b.authors,
                                        b.price,
                                        b.rating));
  }

  add(book: Book) {
    this.books.push(book);
  }
}
