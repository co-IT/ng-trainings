import { Component } from '@angular/core';

import { Book } from './book/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  bookData = new Book(
    '7283642342',
    'Angular',
     ['Papa Mîsko'],
     32);
}
