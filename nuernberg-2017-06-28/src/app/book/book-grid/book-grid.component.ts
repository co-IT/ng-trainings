import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../core/book.service';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'tr-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  subscription;
  constructor(private bookService: BookService) {
    this.books$ = bookService.getFromApi();
    this.bookService.getAllTitles()
      .subscribe(res => {
        console.log(res);
      });

   }
  ngOnInit() {
    this.bookService.getFromApi()
    .subscribe(res => console.log(res));

    this.subscription = this.bookService.bookAdded.subscribe(added => {
    console.log('added');
     this.books$ = this.bookService.getFromApi();
   });
  }

  sort(book: Book) {
    this.bookService.sort();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
