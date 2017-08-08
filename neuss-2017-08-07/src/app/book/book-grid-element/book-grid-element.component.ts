import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'ws-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.scss']
})
export class BookGridElementComponent implements OnInit {
  // <ws-book-grid-element [data] ...>
  @Input() data: Book;
  // <ws-book-grid-element (rate) ...>
  @Output() rate = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    this.data.rating++;
    this.rate.emit(this.data);
  }

  rateDown() {
    this.data.rating--;
    this.rate.emit(this.data);
  }

}
