import {
  Book
} from '../book/models/book';
import {
  Injectable
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http'

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/map'
import { environment } from 'environments/environment';

@Injectable()
export class BookService {
  books: Book[] = [
    new Book('123456', 'Angular', ['Misko Hevery'], 30),
    new Book('123654', 'Aurelia', ['Rob Eisenberg'], 20),
    new Book('123456', 'Vue.js', ['Evan You'], 15)
  ]


  constructor(private http: Http) {}

  addBook(book: Book) {
    this.books.unshift(book);
  }

  addBookToApi(book: Book) {
   return this.http.post('https://book-monkey2-api.angular-buch.com/book',
  {
  isbn: book.isbn,
  title: book.title,
  authors: `book.authors`,
  thumbnails: [
    {
      url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/025B/production/_85730600_monkey2.jpg',
      title: 'Front Cover'
    }
  ]
}
)
  }

  all(): Observable<Book[]> {
    return Observable.of(this.books)
            .delay(2000);
  }

  allFromApi(): Observable<Book[]> {
    return this.http
    .get(`${environment.apiURL}/books`)
    .map(response => response.json())
    .map(books => {
      return books.map(book => {
        const b: Book = new Book(book.isbn, book.title, book.authors, 0)
        if (book && book.thumbnails && book.thumbnails[0]) {
          b.thumbnail = book.thumbnails[0].url;
        }
        return b;
      })
    })
  }

  getBookTitles(): Observable<String[]> {
    return this
            .all()
            .delay(1000)
            .map(books => books.map(book => book.title))

  }


}
