import {Book} from '../models/book';
import { Component } from '@angular/core';
import { BookService } from "app/book/core/book.service";

@Component({
  selector: 'tr-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.sass']
})
export class BookDashboardComponent {
isGridView = true;

   constructor(private bookService: BookService) {
   }

   changeViewMode(isGridView) {
     this.isGridView = isGridView;
   }

   addBook(book: Book) {
     this.bookService.addBook(book).subscribe(
       res => {
         console.log('success');
         this.bookService.bookAdded.emit();
       }, err => {
         console.log('error');
       }, () => console.log('finished')
     );
   }

}
