import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../../core/book.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'tr-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  editForm: FormGroup;
  authorsFormArray: FormArray;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const isbn = this.activatedRoute.snapshot.params['isbn']
    this.bookService.getSingleFromApi(isbn)
    .subscribe(book => {
      this.book = book;

      this.authorsFormArray =
          this.formBuilder.array(this.book.authors
            .map(author => new FormControl(author, Validators.required)))

      this.editForm = this.formBuilder.group({
      isbn: new FormControl(this.book.isbn,
                            [Validators.required]),
      authors: this.authorsFormArray
    })
    })

  }

  removeAuthor(index: number) {
    this.authorsFormArray.removeAt(index);
  }

  addAuthor() {
    this.authorsFormArray
      .push(new FormControl('', Validators.required))
  }

  save() {
    this.bookService.saveBook(this.book.isbn, this.editForm.value)
    .subscribe(res => {
      alert('updated');
    }, err => {
      console.error(err);
    })
    //console.log(this.editForm.value);
  }

}
