import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent implements OnInit {
  @Output() bookCreated = new EventEmitter<Book>();
  book = new Book('', '', []);
  constructor() { }

  ngOnInit() {
  }

  createBook(form: NgForm) {
    this.bookCreated.emit(Object.assign({}, this.book));
    form.reset();
  }

}
