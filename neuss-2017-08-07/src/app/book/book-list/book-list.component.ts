import { Component } from '@angular/core';
import { BookGridComponent } from '../book-grid/book-grid.component';

@Component({
  selector: 'ws-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent extends BookGridComponent { }
