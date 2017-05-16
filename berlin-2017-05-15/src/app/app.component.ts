import { Component } from '@angular/core';

import { Book } from './book/models/book';
import { ViewMode } from './book/book-view-toggle/view-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  viewMode = ViewMode;
  currentViewMode = ViewMode.Grid;

  books = [
    new Book('59382743329', 'Angnular', 20, ['Miskio Hevery']),
    new Book('59382743329', 'Aurelia', 30, ['Rob Eisenberg']),
    new Book('59382743329', 'Vue', 40, ['Andre Staltz'])
  ];

  setCurrentViewMode(newViewMode: ViewMode) {
    this.currentViewMode = newViewMode;
  }

  addNewBook(book: Book) {
    this.books.unshift(book);
  }
}
