import { BookService } from './../book.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Book } from '../../models/book';

@Injectable()
export class BookResolver implements Resolve<Book> {
  constructor(private bookService: BookService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Book> {
    const isbn = route.params['isbn'];
    return this.bookService.getByIsbn(isbn);
  }
}
