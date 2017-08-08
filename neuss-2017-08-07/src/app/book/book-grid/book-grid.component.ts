import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'ws-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.scss']
})
export class BookGridComponent implements OnInit {
  _books: Book[];

  @Input() set books(books: Book[]) {
    if (!books) { return; }

    this._books = books;
    this.reorder(null);
  }

  get books() { return this._books; }

  constructor() { }

  ngOnInit() {

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.reorder(null);
  // }

  reorder(book: Book) {
    console.info('Bewertetes Buch', book);

    this.books.sort((curr, next) =>
      next.rating - curr.rating);
  }
}
