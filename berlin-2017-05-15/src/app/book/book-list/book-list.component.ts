import { BookGridComponent } from './../book-grid/book-grid.component';
import { Component } from '@angular/core';

@Component({
  selector: 'tr-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent extends BookGridComponent {

}
