import { BookService } from './book/core/book.service';
import { Component, OnInit } from '@angular/core';

import { Book } from './book/models/book';
import { ViewMode } from './book/book-view-toggle/view-mode';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
