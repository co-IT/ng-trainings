import { BookService } from 'app/book/core/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Book } from '../models/book';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'tr-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.sass']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService) { }

  ngOnInit() {
    this.route
      .paramMap
      .filter((paramMap: ParamMap) => paramMap.has('isbn'))
      .map(paramMap => paramMap.get('isbn'))
      .switchMap(isbn => this.bookService.single(isbn))
      .subscribe(book => this.book = book);
 }
}


// 1.
// this.route
//   .params
//   .subscribe(params => this.isbn = params['isbn']);

// 2.
// !! import 'rxjs/add/operator/filter';
// this.route
//   .paramMap
//   .filter((paramMap: ParamMap) => paramMap.has('isbn'))
//   .subscribe(paramMap => this.isbn = paramMap.get('isbn'));
