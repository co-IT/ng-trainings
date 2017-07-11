import { Component, OnInit } from '@angular/core';
import { BookGridElementComponent } from '../book-grid-element/book-grid-element.component';

@Component({
  selector: 'tr-book-list-element',
  templateUrl: './book-list-element.component.html',
  styleUrls: ['./book-list-element.component.sass']
})
export class BookListElementComponent extends BookGridElementComponent {

}
