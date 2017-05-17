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

  queryChange = new EventEmitter<string>();

  constructor() {
    this.queryChange
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(query => query && query.length > 0)
      .subscribe(query => {
        // service einfügen, der die Buchdaten zur Verfügung stellt.
        console.log('Suche: ', query);
      });
  }

  ngOnInit() {
  }

}
