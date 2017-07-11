import { Component } from '@angular/core';
import { Book } from './book/models/book';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  viewState: string;
 books: Book[] = [
   new Book('123456', 'Angular', ['Misko Hevery'], 30),
   new Book('123654', 'Aurelia', ['Rob Eisenberg'], 20),
   new Book('123456', 'Vue.js', ['Evan You'], 15)
 ]

setViewState(viewState: string) {
  this.viewState = viewState;
}

addBook(book: Book) {
  this.books.unshift(book);
}

}
