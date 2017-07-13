import {
  BookService
} from '../../core/book.service';
import {
  Book
} from '../models/book';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';

@Component({
  selector: 'tr-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.sass']
})
export class BookDashboardComponent implements OnInit {

  viewState: string;
  books: Observable < Book[] > ;
  constructor(private bookService: BookService) {}

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
