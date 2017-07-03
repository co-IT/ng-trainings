import {Book} from '../models/book';
import {BookService} from '../core/book.service';
import {BookGridElementComponent} from '../book-grid-element/book-grid-element.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tr-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {
  isbn: string;
  book: Book = new Book('','',[]);
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService) {

   }

  ngOnInit() {
    this.isbn = this.activatedRoute.snapshot.params['isbn'];
    this.bookService.getBookByISBN(this.isbn)
    .subscribe(book => {
      this.book = book;
      console.log(book);
    });

  }

}
