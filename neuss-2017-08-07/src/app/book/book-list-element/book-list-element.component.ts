import { Component } from '@angular/core';
import { BookGridElementComponent } from '../book-grid-element/book-grid-element.component';

@Component({
  selector: 'ws-book-list-element',
  templateUrl: './book-list-element.component.html',
  styleUrls: ['./book-list-element.component.scss']
})
export class BookListElementComponent extends BookGridElementComponent { }
