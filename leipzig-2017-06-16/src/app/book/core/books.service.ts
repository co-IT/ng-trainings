import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Book } from '../book';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BooksService {
  endpoint = 'http://localhost:4280';

  constructor(private http: Http) { }

  all(): Observable<Book[]> {
    return this.http
      .get(`${this.endpoint}/books`)
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

  add(book: Book): Observable<Response> {
    return this.http.post(`${this.endpoint}/book`, book);
  }

  delete(isbn: string): Observable<{}|Response> {
    return this.http
      .delete(`${this.endpoint}/book/${isbn}`)
      .catch(err => {
        console.warn(err);
        return Observable.throw(
          'Das Löschen des Buchs ist fehlgeschlagen.'
        );
      });
  }
}
