import { BookService } from './book/core/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './book/book';
import { ViewType } from './book/view-type';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
