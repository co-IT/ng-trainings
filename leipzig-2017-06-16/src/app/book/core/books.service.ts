import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../book';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
  constructor(private http: Http) { }

  all(): Observable<Book[]> {
    return this.http
      .get('http://localhost:4280/books')
      .map(response => response.json())
      .map(booksRaw => booksRaw.map(b => {
        const book = new Book(
          b.isbn,
          b.title,
          b.description,
          b.authors,
          b.price,
          0);
        book.cover = b.cover;
        return book;
      }));
  }

  add(book: Book) {
    // this.books.push(book);
  }
}
