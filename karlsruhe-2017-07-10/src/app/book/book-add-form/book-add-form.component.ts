import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent implements OnInit {
  @Output() addBook: EventEmitter<Book> = new EventEmitter<Book>();
  constructor() { }

  ngOnInit() {
  }

  createBook(isbn: HTMLInputElement, title: HTMLInputElement, authors: HTMLInputElement, price: HTMLInputElement) {
    this.addBook.emit(new Book(isbn.value, title.value, authors.value.split(','), parseFloat(price.value)))
  }

}
