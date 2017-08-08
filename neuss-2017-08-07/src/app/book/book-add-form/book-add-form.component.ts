import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../book';

@Component({
  selector: 'ws-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.scss']
})
export class BookAddFormComponent {
  book = Book.empty();

  @Output() create = new EventEmitter<Book>();

  createNewBook(form: NgForm) {
    const copy = Object.assign({}, this.book);
    this.create.emit(copy);
    form.reset();
  }

  adjustAuthors(value: string) {
    if (!value) { return; }

    this.book.authors = value.split(',');
  }
}
