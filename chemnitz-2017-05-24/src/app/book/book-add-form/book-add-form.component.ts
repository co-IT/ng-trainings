import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from './../models/book';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.css']
})
export class BookAddFormComponent implements OnInit {

  @Output() create = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  createBook(isbn, title, authors, price) {
    this.create.emit(
      new Book(isbn.value, title.value, authors.value,
               price.value)
    );

    isbn.value = title.value = authors.value =
    price.value = '';
  }
}
