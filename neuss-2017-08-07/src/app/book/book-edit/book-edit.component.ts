import { BookService } from './../core/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Book } from '../book';

@Component({
  selector: 'ws-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  editForm: FormGroup;
  isbn$: Observable<string>;
  book: Book;

  get title() { return this.editForm.controls.title; }

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.declareForm();

    this.isbn$ = this.route
      .paramMap
      .filter(map => map.has('isbn'))
      .map(map => map.get('isbn'));

    this.isbn$
      .switchMap(isbn => this.bookService.single(isbn))
      .subscribe(book => {
        this.book = book;
        this.fillForm(book);
      });
  }

  update() {
    console.info(this.editForm.value);
  }

  removeAuthor(index: number) {
    const a = this.editForm.controls.authors as FormArray;
    a.removeAt(index);
  }

  declareForm() {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      authors: this.fb.array([])
    });
  }

  fillForm(book: Book) {
    this.editForm.controls.title.setValue(book.title);
    const authorsOfBook = this.editForm.controls.authors as FormArray;

    book.authors.forEach(a =>
      authorsOfBook.push(this.fb.control(a, Validators.required))
    );
  }
}
