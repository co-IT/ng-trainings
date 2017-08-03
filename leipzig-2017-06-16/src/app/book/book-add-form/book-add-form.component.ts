import { BooksService } from './../core/books.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.css']
})
export class BookAddFormComponent {
  // <app-book-add-form (create)="someMethod()"></app-book-add-form>
  @Output() create = new EventEmitter<Book>();

  createBook(isbn, title, price, description, authors) {
    const book = new Book(isbn.value, title.value, description.value, authors.value, price.value, 0);
    this.create.emit(book);
  }
}
