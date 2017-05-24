import { Injectable } from '@angular/core';

import { Book } from '../models/book';

@Injectable()
export class BookService {
  getAll() {
    return [
      new Book('7283642342', 'Angular', ['Papa Mîsko'], 32),
      new Book('7283322342', 'Aurelia', ['Rob Eisenberg'], 24),
      new Book('7283432342', 'Vue.JS', ['André Staltz'], 28)
    ];
  }
}
