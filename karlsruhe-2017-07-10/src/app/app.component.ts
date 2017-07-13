import {Book} from './book/models/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from './core/book.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
}
