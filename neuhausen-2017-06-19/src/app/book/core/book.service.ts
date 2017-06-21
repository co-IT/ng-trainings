import { Injectable } from '@angular/core';

import { Book } from '../models/book';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  books = [
    new Book('394822324', 'Angular', ['Mîsko Hévéry']),
    new Book('394821323', 'Aurelia', ['Rob Eisenberg']),
    new Book('394843221', 'Vue.JS', ['André Staltz'])
  ];

  all(): Observable<Book[]> {
    return Observable.of(this.books);
  }

  getBookTitles(): Observable<string[]> {
    return this
      .all()
      .map(books => books.map(book => book.title));
  }

  create(book: Book) {
    this.books.unshift(book);
  }
}
