import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'ws-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.scss']
})
export class BookGridComponent implements OnInit {
  @Input() books: Book[];

  constructor() { }

  ngOnInit() {

  }

  reorder(book: Book) {
    console.info('Bewertetes Buch', book);

    this.books.sort((curr, next) =>
      next.rating - curr.rating);
  }
}
