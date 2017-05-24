import { Component } from '@angular/core';

import { Book } from './book/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  books = [
    new Book('7283642342', 'Angular', ['Papa Mîsko'], 32),
    new Book('7283322342', 'Aurelia', ['Rob Eisenberg'], 24),
    new Book('7283432342', 'Vue.JS', ['André Staltz'], 28)
  ];
}
