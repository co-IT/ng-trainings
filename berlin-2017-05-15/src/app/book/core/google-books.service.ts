import { Observable } from 'rxjs/Observable';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GoogleBooksService {

  constructor(private http: Http) { }

  getByQuery(query: string) {
    return this.http
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .map(response => response.json())
      .map(result => {
        if (!result.items) { return []; }

        return result.items.map(b => {
          const book = new Book('',
                                b.volumeInfo.title,
                                b.saleInfo.listPrice,
                                b.volumeInfo.authors);

          book.thumbnail = b.volumeInfo.imageLinks ? b.volumeInfo.imageLinks.thumbnail : null;
          book.rating = b.volumeInfo.averageRating ? b.volumeInfo.averageRating : 0;
          book.description = b.volumeInfo.description;

          return book;
        });
      });
  }

}
