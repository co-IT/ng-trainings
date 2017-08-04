import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../book';
import { BooksService } from './../core/books.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit {
  books: Book[];
  errMessage: string;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService
          .all()
          .subscribe(books => this.books = books);
  }

  sort(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  add(book: Book) {
    this.booksService
      .add(book)
      .subscribe(() => this.loadBooks());
  }

  delete(isbn: string) {
    this.booksService
      .delete(isbn)
      .subscribe(
        // next callback
        () => this.loadBooks(),
        // error callback
        err => this.errMessage = err);
  }
}
