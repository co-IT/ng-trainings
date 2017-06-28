import { Component } from '@angular/core';
import { Book } from './book/models/book';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
 books = [
   new Book('123456', 'Angular', ['Misko Hevery', 'Gregor Woiwode']),
   new Book('654321', 'Aurelia', ['Rob Eisenberg']),
   new Book('555555', 'Vue.js', ['Evan You'])
   ];
   isGridView = true;

   changeViewMode(isGridView) {
     this.isGridView = isGridView;
   }

   addBook(book: Book){
     this.books.unshift(book);
   }
}
