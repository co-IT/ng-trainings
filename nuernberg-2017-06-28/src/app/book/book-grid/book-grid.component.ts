import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'tr-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit {
  @Input() books: Book[];
  constructor() { }

  ngOnInit() {
  }

  sort(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }

}
