import { Component } from '@angular/core';

import { Book } from './book/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  book = new Book('59382743329', 'Angnular', 20, ['Miskio Hevery']);
}
