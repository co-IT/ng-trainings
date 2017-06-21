import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';
import { BookService } from '../core/book.service';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'tr-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.sass']
})
export class BookDashboardComponent implements OnInit, OnDestroy {
  isGridView = true;
  books: Observable<Book[]>;

  subscription: Subscription;

  constructor(
    private bookService: BookService) { }

  ngOnInit() {
    // before all(), now getAll();
    this.loadBooks();

    this.subscription = this.bookService
      .getBookTitles()
      .subscribe(titles => {
        console.log(titles)
      });
  }

  loadBooks() {
    this.books = this.bookService.getAll();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  add(book: Book) {
    this.bookService
      .create(book)
      .catch(err => {
        console.warn(err);
        return Observable.empty();
      })
      .subscribe(() => this.loadBooks());
  }

  updateViewMode(isGridView: boolean) {
    this.isGridView = isGridView;
  }
}
