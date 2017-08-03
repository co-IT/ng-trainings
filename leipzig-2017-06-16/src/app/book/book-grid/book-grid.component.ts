import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../book';
import { BooksService } from './../core/books.service';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit {
  books: Book[];

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
    this.booksService.add(book);
    this.loadBooks();
  }
}
