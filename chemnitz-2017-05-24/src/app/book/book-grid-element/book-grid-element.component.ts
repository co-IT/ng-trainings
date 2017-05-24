import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'app-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.css']
})
export class BookGridElementComponent implements OnInit {

  @Input() book: Book;
  @Output() rate = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    this.book.rateUp();
    this.rate.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rate.emit(this.book);
  }
}
