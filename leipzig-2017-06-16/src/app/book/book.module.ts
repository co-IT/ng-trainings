import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCardComponent } from './book-card/book-card.component';
import { BookGridComponent } from './book-grid/book-grid.component';

import { BooksService } from './core/books.service';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BooksService],
  declarations: [BookCardComponent, BookGridComponent, BookListComponent],
  exports: [BookCardComponent, BookGridComponent, BookListComponent]
})
export class BookModule { }
