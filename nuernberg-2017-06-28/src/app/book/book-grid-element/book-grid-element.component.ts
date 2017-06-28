import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';


@Component({
  selector: 'tr-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.sass']
})
export class BookGridElementComponent implements OnInit {
  @Input() book: Book;
  @Output() rated: EventEmitter<Book> = new EventEmitter<Book>();
  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    this.book.rating++;
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rated.emit(this.book);
  }

}
