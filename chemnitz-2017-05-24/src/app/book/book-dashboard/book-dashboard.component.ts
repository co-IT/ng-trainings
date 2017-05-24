import { Component, OnInit } from '@angular/core';

import { BookService } from './../core/book.service';
import { Book } from './../models/book';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.css']
})
export class BookDashboardComponent implements OnInit {
  title = 'app works!';
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getAll();
  }

  addToTop(book: Book) {
    this.books.unshift(book);
  }
}
