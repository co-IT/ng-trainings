import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { ViewType } from '../view-type';

import { BookService } from '../core/book.service';

@Component({
  selector: 'ws-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent implements OnInit {
  errorMessage: string;
  activeView = ViewType.Kachel;
  view = ViewType;
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService
      .all()
      .subscribe(books => this.books = books);
  }

  add(book: Book) {
    this.bookService
      .createAndRead(book)
      .subscribe(
        books => this.books = books,
        err => this.errorMessage = err);
  }

  activateView(type: ViewType) {
    this.activeView = type;
  }
}
