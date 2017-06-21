import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Book } from '../models/book';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {
  api = 'https://book-monkey2-api.angular-buch.com';

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get(`${this.api}/books`)
      .map(response => response.json())
      .map(booksRaw => booksRaw.map(raw => {
        const book = new Book(raw.isbn,
                              raw.title,
                              raw.authors);

        book.thumbnail = raw.thumbnails[0].url;
        return book;
      }));
  }

  single(isbn: string) {
    return this.http
      .get(`${this.api}/book/${isbn}`)
      .map(response => response.json())
      .map(raw => new Book(raw.isbn, raw.string, raw.authors));
  }

  getBookTitles(): Observable<string[]> {
    return this
      .getAll()
      .map(books => books.map(book => book.title));
  }

  create(book: Book): Observable<any> {
    const convertedBook = this.prepareForApi(book);
    return this.http
      .post(`${this.api}/book`, convertedBook)
      .catch(err =>
        Observable.throw(
          new Error(`Could not create Book (ISBN: ${book.isbn})`)));
  }

  prepareForApi(book: Book) {
    return {
      isbn: book.isbn,
      title: book.title,
      authors: book.authors,
      rating: book.rating,
      thumbnails: [{
        url: book.thumbnail,
        title: book.title
      }]
    }
  }
}
