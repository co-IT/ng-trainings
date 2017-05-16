import { Injectable } from '@angular/core';

import { Book } from '../models/book';

@Injectable()
export class BookService {

  getAll() {
    return [
      new Book('59382743329', 'Angnular', 20, ['Miskio Hevery']),
      new Book('59382743329', 'Aurelia', 30, ['Rob Eisenberg']),
      new Book('59382743329', 'Vue', 40, ['Andre Staltz'])
    ];
  }

}
