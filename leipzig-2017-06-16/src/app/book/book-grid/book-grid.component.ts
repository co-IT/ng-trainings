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
    this.books = this.booksService.all()
  }

  sort(book: Book) {
    console.info(book);
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
