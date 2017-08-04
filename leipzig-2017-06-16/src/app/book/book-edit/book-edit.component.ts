import { BooksService } from './../core/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: string;
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private books: BooksService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.isbn;

    this.books
      .single(this.id)
      .subscribe(book => this.book = book);

    // this.route.params.subscribe(params => this.isbn = params.isbn);
  }
}
