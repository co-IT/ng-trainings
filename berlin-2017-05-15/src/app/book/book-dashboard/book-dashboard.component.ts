import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ViewMode } from '../book-view-toggle/view-mode';
import { BookService } from '../core/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'tr-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.sass']
})
export class BookDashboardComponent implements OnInit {
  books$: Observable<Book[]>;
  title = 'app works!';

  viewMode = ViewMode;
  currentViewMode = ViewMode.Grid;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.getAll();
  }

  setCurrentViewMode(newViewMode: ViewMode) {
    this.currentViewMode = newViewMode;
  }

  addNewBook(book: Book) {
    this.bookService.create(book);
  }
}
