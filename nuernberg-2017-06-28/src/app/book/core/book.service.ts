import { Book } from '../models/book';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { environment } from "environments/environment";

@Injectable()
export class BookService {
  books: Book[];
  bookAdded: EventEmitter<{}> = new EventEmitter<{}>();
  constructor(private http: Http) {
    this.books = [
      new Book('123456', 'Angular', ['Misko Hevery', 'Gregor Woiwode']),
      new Book('654321', 'Aurelia', ['Rob Eisenberg']),
      new Book('555555', 'Vue.js', ['Evan You'])]
   }

   all() {
     return Observable
            .of(this.books)
            .delay(1000);
   }

   getAllTitles() {
     return this.all()
     .map(books =>
            books.map(book => book.title)
         );
   }

   getFromApi(): Observable<Book[]> {
     return this.http
     .get(`${environment.apiEndPoint}books`)
        //.delay(2000)
        .map(response => response.json())
        .map(books => {
          return books.map(book => {
            const b = new Book(book.isbn, book.title, book.authors);
            b.price = 0;
            b.thumbnail = book.thumbnails[0].url;
            return b;
          });

                      })
   }

   addBook(book: Book) {
     return this.http
        .post('https://book-monkey2-api.angular-buch.com/book',
          { isbn: book.isbn,
            title: book.title,
            authors: book.authors,
            subtitle: '',
            rating: book.rating,
            published: '2017-03-01T00:00:00.000Z',
            description: 'Mit diesem Buch [...] am Beispiel erklärt.',
            thumbnails: [
            {
              url: 'https://ng-buch.de/cover2.jpg',
              title: 'Front Cover'
            }
            ]

              });
     }

   sort() {
      this.books.sort((a, b) => b.rating - a.rating);

   }

   getBookByISBN(isbn: string) {
    return this.http.
        get(`${environment.apiEndPoint}book/${isbn}`)
        .map(response => response.json())
        .map(book => {
          const b = new Book(book.isbn, book.title, book.authors);
          b.price = 0;
          b.thumbnail = book.thumbnails[0].url;
          return b;
        });
   }

}
