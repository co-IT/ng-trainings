import { Component } from '@angular/core';
import { Book } from './book/models/book';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isGridView = true;

  books = [
    new Book('394822324', 'Angular', ['Mîsko Hévéry']),
    new Book('394821323', 'Aurelia', ['Rob Eisenberg']),
    new Book('394843221', 'Vue.JS', ['André Staltz'])
  ];

  updateViewMode(isGridView: boolean) {
    this.isGridView = isGridView;
  }
}
