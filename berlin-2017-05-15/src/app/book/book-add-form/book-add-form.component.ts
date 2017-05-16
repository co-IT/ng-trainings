import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent implements OnInit {

  @Output() add = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  addBook(isbn, title, authors, price, description) {
    const book = new Book(isbn.value, title.value, authors.value, price.value);
    book.description = description.value;

    this.add.emit(book);
  }
}
