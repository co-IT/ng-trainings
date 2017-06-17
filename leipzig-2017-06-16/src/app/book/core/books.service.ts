import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable()
export class BooksService {
  private books = [{
    title: 'Angular',
    description: 'Some description',
    authors: ['Mîsko Hévéry'],
    price: 34.50,
    rating: 4
  }, {
    title: 'Aurelia',
    description: 'Some description',
    authors: ['Rob'],
    price: 14.50,
    rating: 4
  }, {
    title: 'Vue.JS',
    description: 'Some description',
    authors: ['André'],
    price: 24.50,
    rating: 4
  }];

  all(): Book[] {
    return this.books.map(b => new Book(b.title,
                                        b.description,
                                        b.authors,
                                        b.price,
                                        b.rating));
  }
}
