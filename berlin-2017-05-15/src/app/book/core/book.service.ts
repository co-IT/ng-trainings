import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';

import 'rxjs/add/observable/of';

@Injectable()
export class BookService {

  books = [
    new Book('29382743329', 'Angular', 20, ['Miskio Hevery']),
    new Book('39382744629', 'Aurelia', 30, ['Rob Eisenberg']),
    new Book('0382723429', 'Vue', 40, ['Andre Staltz'])
  ];

  getAll(): Observable<Book[]> {
   return Observable.of(this.books);
  }

  create(book: Book) {
    this.books.unshift(book);
  }

  getByIsbn(isbn: string) {
    return Observable
      .of(this.books.find(b =>
            b.isbn === isbn));
  }
}
