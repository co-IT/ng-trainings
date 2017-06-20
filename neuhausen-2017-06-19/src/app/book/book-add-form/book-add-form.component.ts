import { Component, Output, EventEmitter } from '@angular/core';

import { Book } from '../models/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent {
  book = Book.empty();

  @Output() create = new EventEmitter<Book>();

  createBook(form: NgForm) {
    this.create.emit(Object.assign(Book.empty(), this.book));
    form.reset();
  }
}
