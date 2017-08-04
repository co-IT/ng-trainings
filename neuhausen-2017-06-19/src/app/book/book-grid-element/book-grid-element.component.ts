import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.sass']
})
export class BookGridElementComponent implements OnInit {
  // <tr-book-grid-element [book]="bookData">..
  @Input() book: Book;
  // <tr-book-grid-element (rate)="sort($event)">..
  @Output() rate = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    this.book.rating++;
    this.rate.emit(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rate.emit(this.book);
  }
}
