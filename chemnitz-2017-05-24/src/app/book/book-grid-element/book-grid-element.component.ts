import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'app-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.css']
})
export class BookGridElementComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
