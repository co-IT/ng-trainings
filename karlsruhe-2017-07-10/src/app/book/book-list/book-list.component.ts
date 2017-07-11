import { Component, OnInit } from '@angular/core';
import { BookGridComponent } from '../book-grid/book-grid.component';

@Component({
  selector: 'tr-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent extends BookGridComponent {

}
