import { Book } from './../models/book';
import { GoogleBooksService } from './../core/google-books.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'tr-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.sass']
})
export class BookSearchComponent implements OnInit {

  books: Book[];
  queryChange = new EventEmitter<string>();

  constructor(private googleBooks: GoogleBooksService) {
    this.queryChange
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(query => query && query.length > 0)
      .subscribe(query => {
        this.googleBooks
          .getByQuery(query)
          .subscribe(books => {
            this.books = books;
            console.log(this.books);
          });
        // service einfügen, der die Buchdaten zur Verfügung stellt.
        console.log('Suche: ', query);
      });
  }

  ngOnInit() {
  }

}
