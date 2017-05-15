import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.sass']
})
export class BookGridElementComponent {
  // properties
  title: string;

  @Input() book: Book;
  @Output() rate = new EventEmitter<Book>();

  rateUp() {
    this.book.rateUp();
    this.rate.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rate.emit(this.book);
  }
}
