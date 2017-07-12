import {Book} from './book/models/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from './core/book.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  viewState: string;
  books: Observable<Book[]>;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    //this.bookService.all()
    //.subscribe(books => this.books = books);
    this.books = this.bookService.allFromApi();

    this.bookService.getBookTitles()
    .subscribe(titles => console.log(titles));

  }

setViewState(viewState: string) {
  this.viewState = viewState;
}





}
