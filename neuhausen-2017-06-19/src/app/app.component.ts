import { Component, OnInit, OnDestroy } from '@angular/core';

import { Book } from './book/models/book';
import { BookService } from './book/core/book.service';


import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  isGridView = true;
  books: Observable<Book[]>;

  subscription: Subscription;

  constructor(
    private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getAll();

    this.subscription = this.bookService
      .getBookTitles()
      .subscribe(titles => {
        console.log(titles);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  add(book: Book) {
    this.bookService.create(book);
  }

  updateViewMode(isGridView: boolean) {
    this.isGridView = isGridView;
  }
}
