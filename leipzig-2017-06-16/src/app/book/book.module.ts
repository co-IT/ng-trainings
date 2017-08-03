import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesModule } from '../utilities/utilities.module';

import { BookCardComponent } from './book-card/book-card.component';
import { BookGridComponent } from './book-grid/book-grid.component';

import { BooksService } from './core/books.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule
  ],
  providers: [BooksService],
  declarations: [BookCardComponent, BookGridComponent, BookListComponent, BookAddFormComponent],
  exports: [BookCardComponent, BookGridComponent, BookListComponent, BookAddFormComponent]
})
export class BookModule { }
