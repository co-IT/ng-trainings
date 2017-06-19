import { Component } from '@angular/core';
import { Book } from './book/models/book';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  book = new Book(
    '39482324',
    'Angular',
    ['Mîsko Hévéry']
  );
}
