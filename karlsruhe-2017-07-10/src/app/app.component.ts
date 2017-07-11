import { Component } from '@angular/core';
import { Book } from './book/models/book';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
 book: Book = new Book('123456', 'Angular', ['Misko Hevery'], 30)
}
