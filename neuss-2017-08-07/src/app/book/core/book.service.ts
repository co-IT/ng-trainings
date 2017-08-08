import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../book';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BookService {
  endpoint = 'http://localhost:4280';

  constructor(private http: HttpClient) { }

  all(): Observable<Book[]> {
    return this.http
      .get<Array<any>>(`${this.endpoint}/books`)
      .map(raw => raw.map(r => new Book(r.title,
                                        r.subtitle,
                                        r.isbn,
                                        r.cover,
                                        r.authors,
                                        r.description,
                                        r.price,
                                        r.rating)));
  }

  create(book: Book) {
    return this.http
      .post(`${this.endpoint}/book`, book)
      .catch(err => {
        console.log(err);
        return Observable.throw(`Ein Buch mit der ISBN '${book.isbn}' existiert bereits.`);
      });
  }

  createAndRead(book: Book) {
    return this
      .create(book)
      .switchMap(() => this.all());
  }
}
