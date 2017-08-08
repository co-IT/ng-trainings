import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { Book } from '../book';
import { BooksService } from './../core/books.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: string;
  book: Book;
  edit: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private books: BooksService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.declareForm();
    this.id = this.route.snapshot.params.isbn;

    this.books
      .single(this.id)
      .subscribe(book => {
        this.book = book;
        this.fillForm(book);
      });
  }

  declareForm() {
    this.edit = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      authors: this.fb.array([])
    });
  }

  fillForm(book: Book) {
    this.edit.controls.title.setValue(book.title);
    const authorsOfBook = this.edit.controls.authors as FormArray;

    book.authors.forEach(a =>
      authorsOfBook.push(this.fb.control(a, Validators.required))
    );
  }
}
