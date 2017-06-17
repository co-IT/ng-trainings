import { Component } from '@angular/core';

import { Book } from './book/book';

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the training';
  isGridView = true;
}
