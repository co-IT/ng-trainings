import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';

import 'rxjs/add/observable/of';

@Injectable()
export class BookService {

  books = [
    new Book('59382743329', 'Angular', 20, ['Miskio Hevery']),
    new Book('59382743329', 'Aurelia', 30, ['Rob Eisenberg']),
    new Book('59382743329', 'Vue', 40, ['Andre Staltz'])
  ];

  getAll(): Observable<Book[]> {
   return Observable.of(this.books);
  }

  create(book: Book) {
    this.books.unshift(book);
  }
}
