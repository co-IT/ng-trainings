import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from './../models/book';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.css']
})
export class BookAddFormComponent implements OnInit {
  book = new Book('', '', [], 0);

  @Output() create = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  createBook(form: NgForm) {
    this.create.emit(Object.assign(new Book('', '', [], 0), this.book));
    form.reset();
  }
}
