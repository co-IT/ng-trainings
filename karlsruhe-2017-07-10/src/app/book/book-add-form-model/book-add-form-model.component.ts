import {Book} from '../models/book';
import { Component, OnInit} from '@angular/core';
import { BookService } from '../../core/book.service';

@Component({
  selector: 'tr-book-add-form-model',
  templateUrl: './book-add-form-model.component.html',
  styleUrls: ['./book-add-form-model.component.sass']
})
export class BookAddFormModelComponent implements OnInit {
  book: Book = Book.empty();
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  createBook() {
    console.log(this.book);
    this.bookService.addBookToApi(Object.assign(
                        Book.empty(),
                        this.book
                      ))
    .subscribe(res => console.log(res))
  }

}
