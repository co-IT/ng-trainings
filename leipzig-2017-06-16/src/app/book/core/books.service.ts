import { Injectable } from '@angular/core';
import { Book } from '../book';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';

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

  all(): Observable<Book[]> {
    const mapped = this.books.map(b => new Book(b.isbn,
                                        b.title,
                                        b.description,
                                        b.authors,
                                        b.price,
                                        b.rating));
    return Observable
      .of(mapped)
      .map(books => books.filter(book => book.price > 25));
  }

  add(book: Book) {
    this.books.push(book);
  }
}
