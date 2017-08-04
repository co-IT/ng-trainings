import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BookCardComponent implements OnInit {

  @Input() data: Book; // <app-book-card [data]></app-book-card>
  @Output() rate = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.data.rating++;
    this.rate.emit(this.data);
  }

  decrement() {
    this.data.rating--;
    this.rate.emit(this.data);
  }

  deleteBook() {
    this.delete.emit(this.data.isbn);
  }
}
