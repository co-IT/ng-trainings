import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../models/book';


@Component({
  selector: 'tr-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.sass']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = this.route.snapshot.data.book;
    // this.book$ = this.route.data.map(data => data.book);
  }
}
