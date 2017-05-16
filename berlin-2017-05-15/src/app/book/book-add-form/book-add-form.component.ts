import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent implements OnInit {
  book = new Book('', '', null, []);

  @Output() add = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  updateAuthors(authors: NgModel) {
    this.book.authors = authors.viewModel.split(',');
  }

  addBook() {
    console.log(this.book);
    this.add.emit(this.book);
  }
}
