import { Component } from '@angular/core';
import { Book } from './book/models/book';
import { BookService } from "app/book/core/book.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
