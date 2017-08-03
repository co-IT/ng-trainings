import { BooksService } from './../core/books.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.css']
})
export class BookAddFormComponent {
  // bind to [(ngModel)]
  book = new Book('', '', '', null, 0, 0);

  // <app-book-add-form (create)="someMethod()"></app-book-add-form>
  @Output() create = new EventEmitter<Book>();

  createBook(form: NgForm) {
    const copy = Object.assign({}, this.book);
    this.create.emit(copy);
    form.reset();
  }

  transformAuthors(value: string) {
    if (!value) { return; }
    this.book.authors = value.split(',');
  }
}
